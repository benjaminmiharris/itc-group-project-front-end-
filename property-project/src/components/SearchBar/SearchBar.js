// import React from 'react';
// import './SearchBar.css';
// import { Form, Button, InputGroup } from 'react-bootstrap';

// function SearchBar() {
//   return (
// //     <Form>
// //       <InputGroup>
// //         <Form.Control type="text" placeholder="Please enter city, zip code, area, ..." />
// //         <InputGroup.Append>
// //           <InputGroup.Text>Rental Type</InputGroup.Text>
// //           <Form.Control as="select" custom>
// //             <option>House</option>
// //             <option>Apartment</option>
// //           </Form.Control>
// //         </InputGroup.Append>
// //         <Button variant="primary">Search</Button>
// //       </InputGroup>
// //     </Form>
// //   );
// // }


// export default SearchBar;

import React, { Component } from 'react';
import './SearchBar.css'
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
        <button type='submit'>Search</button>
      </form>
    );
  }
}
export default SearchBar;