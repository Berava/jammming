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
  }

  // addTrack method that add a song from the results to the user's custom playlist
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

  // remove method that removes a song from a user's custom playlist
  removeTrack(track) {
    const index = this.state.playlistTracks.indexOf(track);
    if (index !== -1)
    {
      this.state.playlistTracks.splice(index, 1);
      this.setState( {
        playlistTracks: this.state.playlistTracks
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist onRemove={this.removeTrack} playlistname={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}
