import React, { Component } from 'react';
import './SearchBar.css'
import img1 from '../components/images/img1.jpg';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      rentalType: 'Rental Type'
    };
  }
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  handleRentalTypeChange = event => {
    this.setState({ rentalType: event.target.value });
  };
  handleSearchSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className='searchbar-container'>
        <form onSubmit={this.handleSearchSubmit} className='search-bar'>
          <input
            type='text'
            placeholder='Please enter city, zip code, area, ...'
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
          />
          
          <select name="home-type" id="home-type" value={this.state.rentalType} onChange={this.handleRentalTypeChange}>
            <option value='home'>Home</option>
            <option value='apartment'>Apartment</option>
          </select>
          <button type='submit'>Search</button>
        </form>
        <img src={img1} alt='img1' className='img1'/>
      </div>
    );
  }
}
export default SearchBar;