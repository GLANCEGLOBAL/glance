import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="glance-title">GLANCE</li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/ourteam">Our Team</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
