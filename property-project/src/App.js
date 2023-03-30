import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import PropertyDetailsPage from "./views/PropertyDetailsPage/PropertyDetailsPage";
import SearchPage from "./views/SearchPage/SearchPage";
import AddRental from "./views/AddRental/AddRental";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./views/Profile/Profile";
import Header from "./components/uikit/Header/Header";
import { AuthProvider } from "./auth/AuthUser";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="main-content">
          <Header />
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<SearchPage />} />
            <Route path="/:id" element={<PropertyDetailsPage />} />
            <Route path="/add" element={<AddRental />} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
