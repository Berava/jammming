import React from'react';
import './Header.css';
import { SpotifyButton } from '../SpotifyButton/SpotifyButton';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <SpotifyButton isLoggedIn={this.props.isLoggedIn} onConnect={this.props.onConnect} />
      </header>
    );
  }
}
