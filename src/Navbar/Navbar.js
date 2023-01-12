import React, { useState } from "react";
import "./Navbar.css";
// import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Demo Streaming</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Login</a>
        <a href="/about">Let try free trail</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
