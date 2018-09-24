// empty variable tha will host the user's access token
const accessToken = '';

const expiresIn = '';
const applicationClientId = '2777578f0d324246884f806ef3a8ed43';
const redirectUri = 'http://localhost:3000/';
const url = 'https://accounts.spotify.com/authorize?';
const queyParams = '';

//function to recup url param value
function getParamByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const Spotify = {
  // method that check the userAccessToken
  getAccessToken: function() {
    if (userAccessToken !== '') {
      return userAccessToken;
    } else {
        if (window.location.href.match(/access_token=([^&]*)/) !== null && window.location.href.match(/expires_in=([^&]*)/) !== null) {
          accessToken = getParamByName('access_token');
          expiresIn = getParamByName('expires_in');
          window.setTimeout(() => accessToken = '', Number(expiresIn) * 1000);
          window.history.pushState('Access Token', null, '/');
        } else {
          newUrl = `https://accounts.spotify.com/authorize?client_id=${applicationClientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
          window.location =newUrl;
        }
    }
  }
};

export default Spotify;
