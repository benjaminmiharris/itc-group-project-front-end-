import React from 'react';
import './NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar({ handleSignupClick, handleLoginClick }) {
  return (
    <nav>
      <Navbar className='navbar' bg="light" expand="lg">
      <Navbar.Brand href="#">Home</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="login-toggle">
          <button onClick={handleSignupClick}>Signup</button>
          <button onClick={handleLoginClick}>Login</button>
          </Nav>
      </Navbar.Collapse>
      </Navbar>
      
    </nav>
  );
} 



export default NavBar;