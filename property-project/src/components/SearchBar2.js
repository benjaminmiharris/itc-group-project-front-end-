import React, { Component } from 'react';
import './SearchBar.css'


class SearchBar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      rentalType: 'Rental Type',
      price: '',
    };
  }
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  handleRentalTypeChange = event => {
    this.setState({ rentalType: event.target.value });
  };
  handlePriceChange = event => {
    this.setState({ price: event.target.value });
  };
  handleSearchSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSearchSubmit} className='search-bar'>
        <input
          type='text'
          placeholder='Please enter city, zip code, area, ...'
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
        />
        <select value={this.state.rentalType} onChange={this.handleRentalTypeChange}>
          <option value='home'>Home</option>
          <option value='apartment'>Apartment</option>
        </select>
        <select value={this.state.price} onChange={this.handlePriceChange}>
          <option value='00-500'>00 - 500 $</option>
          <option value='501-1000'>501 - 1000 $</option>
          <option value='1001-1500'>1001 - 1500 $</option>
          <option value='1501-2000'>1501 - 2000 $</option>
          <option value='2001-2500'>2001 - 2500 $</option>
          <option value='2501-3000'>2501 - 3500 $</option>
          <option value='plus'>+</option>
        </select>
        <button type='submit'>Search</button>
      </form>
    );
  }
}
export default SearchBar2;