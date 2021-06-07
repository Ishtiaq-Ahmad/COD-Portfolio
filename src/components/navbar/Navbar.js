import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';


function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-light ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" src="../images/logo2.png" alt = "logo image" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link link-menu active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-menu" to="about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-menu" to="service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-menu" to="portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-menu" to="contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar
