import React, { Component } from 'react';
import './SearchBar.css'
import Input from '../uikit/Input/Input';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeTypeDropdown from '../uikit/Dropdowns/HomeTypeDropdown/HomeTypeDropdown';
import SearchButton from '../Buttons/SearchButton/SearchButton';
import PriceDropdown from '../uikit/Dropdowns/PriceDropdown/PriceDropdown';
import Column from '../uikit/Column/Column';



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
              <Column>
                <Input
                  type='text'
                  placeholder='Please enter city, zip code, area, ...'
                  value={this.state.searchTerm}
                  onChange={this.handleSearchTermChange}
                />
              </Column>
              <Column>
                <HomeTypeDropdown value={this.state.rentalType} onChange={this.handleRentalTypeChange}>
                  <option value='home'>Home</option>
                  <option value='apartment'>Apartment</option>
                </HomeTypeDropdown>
              </Column>
              <Column>
                <PriceDropdown value={this.state.price} onChange={this.handlePriceChange}>
                  <option value='00-500'>00 - 500 $</option>
                  <option value='501-1000'>501 - 1000 $</option>
                  <option value='1001-1500'>1001 - 1500 $</option>
                  <option value='1501-2000'>1501 - 2000 $</option>
                  <option value='2001-2500'>2001 - 2500 $</option>
                  <option value='2501-3000'>2501 - 3500 $</option>
                  <option value='plus'>+</option>
                </PriceDropdown>
              </Column>
              <Column>
                <SearchButton type='submit'>Search</SearchButton>
              </Column>

          </form>
      

      </>
    );
  }
}
export default SearchBar2;