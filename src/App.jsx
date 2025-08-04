import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import 'bootstrap-icons/font/bootstrap-icons.css';
import InquiryForm from "./pages/InquiryForm";
import FavoritesContext from "./contexts/FavoritesContext";
import Register from "./pages/Register";
import AuthContext from "./contexts/AuthContext";

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/inquiry" element={<InquiryForm />} />
          </Routes>
        </HashRouter>
      </FavoritesContext.Provider>
    </AuthContext.Provider>
  );
}
