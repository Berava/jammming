import React from 'react';
import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }
  // This render method is not finished !!!!
  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action">-</a>;
    } else {
      return <a onClick={this.addTrack} className="Track-action">+</a>;;
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album} </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
