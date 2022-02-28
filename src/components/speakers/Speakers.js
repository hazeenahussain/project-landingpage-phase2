import React from 'react';

function Speakers(props) {
    return (
        <div>
    <section id="speakers">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Event Speakers</h2>
      <p>Here are some of our speakers</p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="speaker" data-aos="fade-up" data-aos-delay={100}>
          <img src="assets/img/speakers/1.jpg" alt="Speaker 1" className="img-fluid" />
          <div className="details">
            <h3><a href="speaker-details.html">Tony Thomas</a></h3>
            <p>Chairman of the board</p>
            <div className="social">
              <a href><i className="bi bi-twitter" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="speaker" data-aos="fade-up" data-aos-delay={200}>
          <img src="assets/img/speakers/2.jpg" alt="Speaker 2" className="img-fluid" />
          <div className="details">
            <h3><a href="speaker-details.html">Santhosh Kurup</a></h3>
            <p>CEO</p>
            <div className="social">
              <a href><i className="bi bi-twitter" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="speaker" data-aos="fade-up" data-aos-delay={300}>
          <img src="assets/img/speakers/3.jpg" alt="Speaker 3" className="img-fluid" />
          <div className="details">
            <h3><a href="speaker-details.html">Cole Emmerich</a></h3>
            <p>Fugiat laborum et</p>
            <div className="social">
              <a href><i className="bi bi-twitter" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="speaker" data-aos="fade-up" data-aos-delay={100}>
          <img src="assets/img/speakers/4.jpg" alt="Speaker 4" className="img-fluid" />
          <div className="details">
            <h3><a href="speaker-details.html">Jack Christiansen</a></h3>
            <p>Debitis iure vero</p>
            <div className="social">
              <a href><i className="bi bi-twitter" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="speaker" data-aos="fade-up" data-aos-delay={200}>
          <img src="assets/img/speakers/5.jpg" alt="Speaker 5" className="img-fluid" />
          <div className="details">
            <h3><a href="speaker-details.html">Alejandrin Littel</a></h3>
            <p>Qui molestiae natus</p>
            <div className="social">
              <a href><i className="bi bi-twitter" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="speaker" data-aos="fade-up" data-aos-delay={300}>
          <img src="assets/img/speakers/6.jpg" alt="Speaker 6" className="img-fluid" />
          <div className="details">
            <h3><a href="speaker-details.html">Willow Trantow</a></h3>
            <p>Non autem dicta</p>
            <div className="social">
              <a href><i className="bi bi-twitter" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
}

export default Speakers;