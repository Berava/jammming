import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.HandleSearch = this.HandleSearch.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  HandleSearch() {
    this.props.onSearch(this.state.searchInput);
  }

  handleTermChange(event) {
    let searchInput = event.target.value;
    this.setState({
      searchInput: searchInput
    });
  }

  render() {
    return(
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a onClick={this.HandleSearch}>SEARCH</a>
      </div>
    );
  }
}
