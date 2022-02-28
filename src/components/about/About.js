import React from 'react';

function About(props) {
    return (
        <div>
         <section id="about">
  <div className="container" data-aos="fade-up">
    <div className="row">
      <div className="col-lg-6">
        <h2>About The ICTAK Hall Booking Portal</h2>
        <p>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improve their employability opportunities in the Industry. The Company is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.This blog is an Online Hall Booking Portal for ICTAK where Associates can book a conference room prior to their meeting on a particular day and time.</p>
      </div>
      <div className="col-lg-3">
        <h3>Where</h3>
        <p> Thejaswini Building, Technopark,Trivandrum</p>
      </div>
      <div className="col-lg-3">
        <h3>When</h3>
        <p>Monday to Sunday<br />24 Hours</p>
      </div>
    </div>
  </div>
</section>
{/* .................................................................... */}
<section id="faq">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Our Key Focus Areas </h2>
    </div>
    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-9">
        <ul className="faq-list">
          <li>
            <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Industry focused enablement programmes for Faculty members<i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
              {/* <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p> */}
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">
Industry focused ICT Skills development programmes for Students <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
              {/* <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p> */}
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">
Project assignments related to capability building for Institutions and Corporate. <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
              {/* <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </p> */}
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Creating Intellectual Property on niche skill areas and emerging technologies. <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
              {/* <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p> */}
            </div>
          </li>
          {/* <li>
            <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
              </p>
            </div>
          </li> */}
          {/* <li>
            <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  </div>
</section>

{/* ..................................................... */}
 
        </div>
    );
}

export default About;