import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'Coding',
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  // method that add a song from the results to the user's custom playlist
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.state.playlistTracks.push(track);
      this.setState({
        playlistTracks: this.state.playlistTracks
      });
    }
  }

  // method that removes a song from a user's custom playlist
  removeTrack(track) {
    const index = this.state.playlistTracks.indexOf(track);
    if (index !== -1)
    {
      this.state.playlistTracks.splice(index, 1);
      this.setState({
        playlistTracks: this.state.playlistTracks
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

  // TODO: A TESTER
  // TODO: In a later step, you will pass the trackURIs array and playlistName to a method that will save the user's playlist to their account.
  // method to save the custom playlist
  savePlaylist() {
    const trackURIs = [];
    this.state.playlistTracks.forEach(function(savedTrack) {
      trackURIs.push(savedTrack.uri);
    });
    return trackURIs;
  }

  // method to update the searchResults parameter
  search(searchTerm) {
    Spotify.search(searchTerm).then(searchResults => {
        this.setState({searchResults: searchResults});
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
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
            playlistname={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}
