import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import PropertyDetailsPage from "./views/PropertyDetailsPage/PropertyDetailsPage";
import SearchPage from "./views/SearchPage/SearchPage";
import AddRental from "./views/AddRental/AddRental";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="main-content">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/:id" element={<PropertyDetailsPage />} />
          <Route path="/add" element={<AddRental />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
