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
        id:3},
      ],
      playlistName: 'Coding',
      playlistTracks: [
        {name: 'La femme dargent',
        artist: 'Air',
        album: 'Moon Safari',
        id: 1},
        {name: 'Cecconi',
        artist: 'Photek',
        album: 'Aviator EP',
        id: 2},
        {name: 'Elegy',
        artist: 'Tycho',
        album: 'Dive',
        id:3},
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistname={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}
