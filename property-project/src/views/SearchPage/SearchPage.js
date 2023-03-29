import React, {useState} from "react";
import "./SearchPage.css";
import DropDown from "../../components/MultiSelect/DropDown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputText from "../../components/InputUI/InputText";
import PrimaryBtn from "../../components/Buttons/ActionButton/PrimaryBtn";
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "../../components/uikit/Header/Header"
import Card from "../../components/uikit/Card/Card";
import Listings from "../../components/Listings/Listings";
import SearchResults from "../../components/uikit/SearchResults/SearchResults";
import LoginButton from "../../components/Buttons/LoginButton/LoginButton";

const SearchPage = () => {

  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSignupClick = () => setShowSignup(true);
  const handleLoginClick = () => setShowLogin(true);

  const handleCloseSignup = () => setShowSignup(false);
  const handleCloseLogin = () => setShowLogin(false);

  // Close or Show window
  window.onclick = function (event) {
    const signupModal = document.querySelector(".modal");
    const loginModal = document.querySelector(".modal");
    if (event.target === signupModal) {
      setShowSignup(false);
    } else if (event.target === loginModal) {
      setShowLogin(false);
    }
  };

  return (
    <>
      <Container className="search-page-container">
        <Header />

        <Row className="search-bar-filter">
          <SearchBar />
        </Row>
        <Row className="result-summary">
          <Listings />
        </Row>
        <Row className="search-results">
          <SearchResults />
        </Row>
      </Container>

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
      
    </>
  );
};

export default SearchPage;
