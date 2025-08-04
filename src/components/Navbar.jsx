import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Only make the navbar fixed if NOT on /directory
  const isFixed = location.pathname !== "/directory";

  return (
    <>
      {/* TOP BAR */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0.75rem 1rem",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          boxShadow: isFixed ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <button
          onClick={toggleMenu}
          style={{
            background: "#343434",
            border: "none",
            color: "white",
            fontSize: "1.3rem",
            padding: "0.4rem 0.8rem",
            borderRadius: "8px",
            marginRight: "1rem",
            cursor: "pointer",
          }}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <Link
          to="/"
          onClick={closeMenu}
          style={{
            color: "#FFD700",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textDecoration: "none",
            textShadow: "1px 1px 3px black",
          }}
        >
          Research Portal
        </Link>
      </nav>

      {/* SIDEBAR MENU */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: isOpen ? 0 : "-250px",
          width: "250px",
          height: "100vh",
          backgroundColor: "#222",
          color: "#f1f1f1",
          padding: "2rem 1rem",
          transition: "left 0.3s ease-in-out",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button
          onClick={closeMenu}
          style={{
            alignSelf: "flex-end",
            background: "transparent",
            border: "none",
            color: "#ccc",
            fontSize: "1.5rem",
            cursor: "pointer",
            marginBottom: "1rem",
          }}
          aria-label="Close menu"
        >
          ✕
        </button>

       <Link to="/" onClick={closeMenu} style={linkStyle}>🏠 Home</Link>
      <Link to="/directory" onClick={closeMenu} style={linkStyle}>📚 Directory</Link>
      <Link to="/favorites" onClick={closeMenu} style={linkStyle}>⭐ Favorites</Link>
      <Link to="/login" onClick={closeMenu} style={linkStyle}>🔐 Login</Link>
      <Link to="/inquiry" onClick={closeMenu} style={linkStyle}>📩 Inquiry</Link> 
      <Link to="/register" onClick={closeMenu} style={linkStyle}>📝 Register</Link>


      </div>
    </>
  );
}

const linkStyle = {
  color: "#f9f9f9",
  textDecoration: "none",
  margin: "1rem 0",
  fontSize: "1.1rem",
  fontWeight: 500,
  display: "block",
  transition: "color 0.2s ease",
};
