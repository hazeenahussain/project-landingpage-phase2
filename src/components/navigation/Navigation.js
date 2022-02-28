import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
     <header id="header" className="d-flex align-items-center ">
  <div className="container-fluid container-xxl d-flex align-items-center">
    <div id="logo" className="me-auto">
      <a href="index.html" className="scrollto"><img src="assets/img/logo ict1.png"  alt title /></a>
    </div>
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
      <Link to="/" className="nav-link scrollto active">
            Home
            </Link>
        {/* <li><a className="nav-link scrollto active" href="#hero">Home</a></li> */}
        <li>
            <Link to="/About" className="nav-link scrollto">
            About
            </Link>
            {/* <a className="nav-link scrollto" href="#about">About</a> */}
            </li>
        <li>
        <Link to="/Speakers" className="nav-link scrollto">
        Speakers
            </Link>
            </li>
            {/* <a className="nav-link scrollto" href="#speakers">Speakers</a></li> */}
        {/* <li><a className="nav-link scrollto" href="#schedule">Schedule</a></li> */}
        <li>
        <Link to="/Venue" className="nav-link scrollto">
        Venue
            </Link>
          {/* <a className="nav-link scrollto" href="#venue">Venue</a> */}
          </li>
        {/* <li><a className="nav-link scrollto" href="#hotels">Hotels</a></li> */}

        <li>
        <Link to="/Gallery" className="nav-link scrollto ">
        Gallery
            </Link>
            {/* <a className="nav-link scrollto" href="#gallery">Gallery</a> */}
            </li>
        <li>
        <Link to="/Sponsors" className="nav-link scrollto ">
         Partners
            </Link>
          {/* <a className="nav-link scrollto" href="#supporters">Sponsors</a> */}
          </li>
        {/* <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
    <Link to="/Login" className="buy-tickets scrollto"  >
    Login/SignUp
            </Link>
    {/* <a className="buy-tickets scrollto" href="#buy-tickets">Login/SignUp</a> */}
  </div>
</header>

          
    );
}

export default Navigation;