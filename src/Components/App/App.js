import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'Tiny Dancer',
        artist: 'Elton John',
        album: 'Madman Across The Water',
        id: 1},
        {name: 'Tiny Dancer',
        artist: 'Tim McGraw',
        album: 'Love Story',
        id: 2},
        {name: 'Tiny Dancer',
        artist: 'Rockabye Baby!',
        album: 'Lullaby renditions of Elton John',
        id:3}
      ],
      playlistName: 'Coding',
      playlistTracks: [
        {name: 'La femme dargent',
        artist: 'Air',
        album: 'Moon Safari',
        id: 4},
        {name: 'Cecconi',
        artist: 'Photek',
        album: 'Aviator EP',
        id: 5},
        {name: 'Elegy',
        artist: 'Tycho',
        album: 'Dive',
        id:6}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
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

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistname={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}
