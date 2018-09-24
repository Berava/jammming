// empty variable that will host the user's access token
let usersAccessToken = '';
const applicationClientId = 'client_id=2777578f0d324246884f806ef3a8ed43';
const redirectUri = '&redirect_uri=http://localhost:3000/';


const Spotify = {
  getAccessToken() {
    if (usersAccessToken) {
      return usersAccessToken
    }
    let accessToken = window.location.href.match(/access_token=([^&]*)/);
    let tokenExpiration = window.location.href.match(/expires_in=([^&]*)/);
    if (accessToken && tokenExpiration) {
      usersAccessToken = accessToken[1];
      let expirationTime = Number(tokenExpiration[1]);
      window.setTimeout(() => usersAccessToken = '', expirationTime * 1000);
      window.history.pushState('Access Token', null, '/');
      return usersAccessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?${applicationClientId}&response_type=token&scope=playlist-modify-public&${redirectUri}`;
    }
  },

  async search(searchTerm) {
    let token = Spotify.getAccessToken();
    let headersObj = {
      headers: {Authorization: `Bearer ${token}`}
    };
    let response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, headersObj);
    if (response.ok) {
      let jsonResponse = await response.json();
      return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      };
  }
};

export default Spotify
