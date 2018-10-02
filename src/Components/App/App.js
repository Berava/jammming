import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import {Header} from '../Header/Header';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: '',
      playlistTracks: [],
      isLoggedIn: false
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.connect = this.connect.bind(this);
  }

  // method that add a song from the results to the user's custom playlist
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      let newState = this.state.playlistTracks.slice();
      newState.push(track);
      this.setState({
        playlistTracks: newState
      });
    }
  }

  // method that removes a song from a user's custom playlist
  removeTrack(track) {
    const index = this.state.playlistTracks.indexOf(track);
    if (index !== -1)
    {
      let newState = this.state.playlistTracks.slice();
      newState.splice(index, 1);
      this.setState({
        playlistTracks: newState
      });
    } else {
      return;
    }
  }

  // method that change the name of the custom playlist
  updatePlaylistName (name) {
    this.setState({
      playlistName: name
    });
  }

  // method that save the user custom playlist
  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
      playlistName: "New playlist",
      playlistTracks: []
    });
  });
  }

  // method to update the searchResults parameter
  search(searchTerm) {
    Spotify.search(searchTerm).then(searchResults => {
        this.setState({
          searchResults: searchResults,
          isLoggedIn: true});
    });
  }

  // method to connect to Spotify
  connect() {
    Spotify.getAccessToken();
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} onConnect={this.connect} />
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
            onAdd={this.addTrack}
            searchResults={this.state.searchResults} />
            <Playlist
            onSave={this.savePlaylist}
            onNameChange={this.updatePlaylistName}
            onRemove={this.removeTrack}
            playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}
