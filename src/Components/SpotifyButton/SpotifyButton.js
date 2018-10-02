import React from 'react';
import './SpotifyButton.css';
import spotify from './spotify.png';

export class SpotifyButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location = 'http://localhost:3000/';
  }

  render() {
    let buttonContent = null;
    if (!this.props.isLoggedIn) {
      buttonContent = (
        <div className="spotify-login">
          <img src={spotify} alt="logo of spotify" />
          <a onClick={this.props.onConnect}>Connect with Spotify</a>
        </div>
      );
    }else {
      buttonContent = (
        <div className="spotify-logout">
          <a onClick={this.handleClick}>Logout</a>
        </div>
      );
    }

    return buttonContent;
  }
}
