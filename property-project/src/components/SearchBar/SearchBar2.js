import React, { Component } from 'react';
import './SearchBar.css'
import Input from '../uikit/Input/Input';
import HomeTypeDropdown from '../uikit/Dropdowns/HomeTypeDropdown/HomeTypeDropdown';
import SearchButton from '../uikit/SearchButton/SearchButton';
import PriceDropdown from '../uikit/Dropdowns/PriceDropdown/PriceDropdown';


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
      <>
        <form onSubmit={this.handleSearchSubmit} className='search-bar'>
          <Input type='text' value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
          <HomeTypeDropdown value={this.state.rentalType} onChange={this.handleRentalTypeChange} />
          <PriceDropdown value={this.state.price} onChange={this.handlePriceChange} />
            
          <SearchButton type='submit'/>
        </form>
      </>
    );
  }
}
export default SearchBar2;