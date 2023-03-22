import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import PropertyDetailsPage from "./views/PropertyDetailsPage/PropertyDetailsPage";
import SearchPage from "./views/SearchPage/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:id" element={<PropertyDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
