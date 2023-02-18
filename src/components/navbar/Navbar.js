import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">Political Party</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li class="nav-item">
              <Link to="/event" className="nav-link text-weight">Events</Link>
            </li>
            <li class="nav-item">
              <Link to="/agenda" className="nav-link text-weight">Agenda</Link>
            </li>
            <li class="nav-item">
              <Link to="/merch" className="nav-link text-weight">Merchandise</Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" className="nav-link text-weight">Contact Us</Link>
            </li>
            <li class="nav-item">
              <Link to="/" className="nav-link text-weight">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
