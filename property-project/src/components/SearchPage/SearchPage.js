import React, { Component } from 'react';
import SearchBar2 from '../SearchBar/SearchBar2';
import CardRental from '../CardRental/CardRental';
import './SearchPage.css'; // For SAM
import NavBar from '../NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import img2 from '../images/img2.png'
import Header from '../uikit/Header/Header';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchTerm: '',
      rentalType: 'home',
      price: ''
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
    //  WAITING FOR THE BE API
    // DATA SIMULATION JUST WAITING FOR THE BACKEND API
    const searchResults = [
      {
        id: 1,
        address: '111 Ben Gourion St',
        rentalType: 'home',
        price: 1000
      },
      {
        id: 2,
        address: '45 Herzl St',
        rentalType: 'apartment',
        price: 1100
      },
      {
        id: 3,
        address: '7 Yafo St',
        rentalType: 'home',
        price: 2200
      }
    ];
    this.setState({ searchResults });
  };


  render() {
    const searchResultCards = [];
    const { searchResults } = this.state;
    for (let i = 0; i < searchResults.length; i += 4) {
      const row = searchResults.slice(i, i + 4);
      const cards = row.map(result => (
        <div key={result.id} className="col-sm-3">
          <CardRental
            address={result.address}
            rentalType={result.rentalType}
            price={result.price}
          />
        </div>
      ));
      searchResultCards.push(
        <div key={i} className="row">
          {cards}
        </div>
      );
    }

    return (
      <div>
        <div className='container'>
          <Header/>
          <SearchBar2
            searchTerm={this.state.searchTerm}
            rentalType={this.state.rentalType}
            price={this.state.price}
            handleSearchTermChange={this.handleSearchTermChange}
            handleRentalTypeChange={this.handleRentalTypeChange}
            handlePriceChange={this.handlePriceChange}
            handleSearchSubmit={this.handleSearchSubmit}
          />
        </div>

        <div className='search-results-container'>
          <h2 className='search-results'>Search Results</h2>
          {searchResultCards}
        </div>
      </div>
    );
  }
}

export default SearchPage;
