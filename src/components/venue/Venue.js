import React from 'react';

function Venue(props) {
    return (
        <div>
   <section id="venue">
  <div className="container-fluid" data-aos="fade-up">
    <div className="section-header">
      <h2>Conference Venue</h2>
      <p>Conference venue location info and gallery</p>
    </div>
    <div className="row g-0">
      {/* <div className="col-lg-6 venue-map">
        <iframe src="https://www.google.com/maps/place/ICT+Academy+of+Kerala/@8.5565655,76.8819826,15z/data=!4m12!1m6!3m5!1s0x0:0x5a237b1a5fa40a39!2sICT+Academy+of+Kerala!8m2!3d8.5565655!4d76.8819826!3m4!1s0x0:0x5a237b1a5fa40a39!8m2!3d8.5565655!4d76.8819826" frameBorder={0} style={{border: 0}} allowFullScreen />
      </div> */}
      <div className="col-lg-6 venue-info">
        <div className="row justify-content-center">
          <div className="col-11 col-lg-8 position-relative">
            <h3>ICTAK Conference Center</h3>
            <p>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improve their employability opportunities in the Industry. The Company is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid venue-gallery-container" data-aos="fade-up" data-aos-delay={100}>
    <div className="row g-0">
      <div className="col-lg-3 col-md-4">
        <div className="venue-gallery">
          <a href="assets/img/venue-gallery/1.jpg" className="glightbox" data-gall="venue-gallery">
            <img src="assets/img/venue-gallery/1.jpg" alt className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="venue-gallery">
          <a href="assets/img/venue-gallery/2.jpg" className="glightbox" data-gall="venue-gallery">
            <img src="assets/img/venue-gallery/2.jpg" alt className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="venue-gallery">
          <a href="assets/img/venue-gallery/3.jpg" className="glightbox" data-gall="venue-gallery">
            <img src="assets/img/venue-gallery/3.jpg" alt className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="venue-gallery">
          <a href="assets/img/venue-gallery/4.jpg" className="glightbox" data-gall="venue-gallery">
            <img src="assets/img/venue-gallery/4.jpg" alt className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="venue-gallery">
          <a href="assets/img/venue-gallery/5.jpg" className="glightbox" data-gall="venue-gallery">
            <img src="assets/img/venue-gallery/5.jpg" alt className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="venue-gallery">
          <a href="assets/img/venue-gallery/2.jpg" className="glightbox" data-gall="venue-gallery">
            <img src="assets/img/venue-gallery/1.jpg" alt className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="venue-gallery">
          <a href="assets/img/venue-gallery/7.jpg" className="glightbox" data-gall="venue-gallery">
            <img src="assets/img/venue-gallery/7.jpg" alt className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="venue-gallery">
          <a href="assets/img/venue-gallery/8.jpg" className="glightbox" data-gall="venue-gallery">
            <img src="assets/img/venue-gallery/8.jpg" alt className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
}

export default Venue;
