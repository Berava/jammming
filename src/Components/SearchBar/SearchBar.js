import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSearch() {
    this.props.onSearch(this.state.searchInput);
  }

  handleTermChange(event) {
    let searchInput = event.target.value;
    this.setState({
      searchInput: searchInput
    });
  }

  handleKeyPress(event) {
    let code = event.charCode;
    if (code === 13) {
      this.handleSearch();
    }
  }

  render() {
    return(
      <div className="SearchBar">
        <input onKeyPress={this.handleKeyPress} onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a onClick={this.handleSearch}>SEARCH</a>
      </div>
    );
  }
}
