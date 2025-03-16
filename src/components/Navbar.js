import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
      <img src="/assets/logo.jpeg" alt="Lendi Logo" className="navbar-logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/report">Reports</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;