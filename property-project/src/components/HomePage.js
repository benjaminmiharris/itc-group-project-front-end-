import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import './NavBar.css';
import SearchBar from './SearchBar/SearchBar';
import img1 from '../components/images/img1.jpg';


function HomePage() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSignupClick = () => setShowSignup(true);
  const handleLoginClick = () => setShowLogin(true);

  const handleCloseSignup = () => setShowSignup(false);
  const handleCloseLogin = () => setShowLogin(false);

    // Close or Show window
    window.onclick = function (event) {
        const signupModal = document.querySelector('.modal');
        const loginModal = document.querySelector('.modal');
        if (event.target === signupModal) {
          setShowSignup(false);
        } else if (event.target === loginModal) {
          setShowLogin(false);
        }
      };

  return (
    <div>
      <NavBar handleSignupClick={handleSignupClick} handleLoginClick={handleLoginClick} />
      <SearchBar/>
      <img src={img1} className='img1'/>


      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseSignup}>
              &times;
            </span>
            <h2>WELCOME</h2>
            <form>
              <label>Email:</label>
              <input type="email" required />
              <label>Password:</label>
              <input type="password" required />
              <label>Confirm Password:</label>
              <input type="password" required />
              <div>
                <input type="checkbox" required />
                <label>I am a realtor or industry professional </label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseLogin}>
              &times;
            </span>
            <h2>WELCOME</h2>
            <form>
              <label>Email:</label>
              <input type="email" required />
              <label>Password:</label>
              <input type="password" required />
              <button type="submit">Login</button>
            </form>
            <a href="#">Forgot Your Password?</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage; 


