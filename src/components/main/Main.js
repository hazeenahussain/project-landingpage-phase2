import React from 'react';
import { Link } from 'react-router-dom';

function Main(props) {
    return (
        <div>
           <section id="hero">
  <div className="hero-container" data-aos="zoom-in" data-aos-delay={100}>
    <h1 className="mb-4 pb-0">ICTAK<br /><span>Hall Booking</span> Portal</h1>
    <p className="mb-4 pb-0"> Thejaswini Building, Technopark,Trivandrum</p>
    <a href="https://www.youtube.com/watch?v=7UvVDvvWJrk" className="glightbox play-btn mb-4" />

    <Link to="/About" className="about-btn scrollto">
    About The Portal
            </Link>
    {/* <a href="#about" className="about-btn scrollto">About The Event</a> */}
  </div>
</section>

        </div>
    );
}

export default Main;