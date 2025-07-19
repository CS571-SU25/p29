import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";

import FavoritesContext from "./contexts/FavoritesContext";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </FavoritesContext.Provider>
  );
}
