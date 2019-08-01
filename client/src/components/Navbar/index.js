import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
      <a className="navbar-brand mr-0 mr-md-2" href="/">
        Google Books
      </a>
      <a className="btn btn-bd-download d-lg-inline-block mb-3 mb-md-0 ml-md-3" href="/">Search</a>
      <a className="btn btn-bd-download d-lg-inline-block mb-3 mb-md-0 ml-md-3" href="/saved">Saved</a>
      
    </nav>
  );
}

export default Navbar;

