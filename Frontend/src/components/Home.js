import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  

  return (
    <div id="main">
      <section id="hero" className="d-flex justify-content-center align-items-center">
        <div className="container position-relative aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
          <h1>Learning Today,<br />Leading Tomorrow</h1>
          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <Link to="/about" className="btn-get-started">Get Started</Link>
        </div>

      </section>

      <section id="why-us" className="why-us">
        <div className="container aos-init aos-animate" data-aos="fade-up">

          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="content">
                <h3>Why Choose SOL?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                </p>
                <div className="text-center">
                  <a href="about.html" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-receipt"></i>
                      <h4>Corporis voluptates sit</h4>
                      <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-cube-alt"></i>
                      <h4>Ullamco laboris ladore pan</h4>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-images"></i>
                      <h4>Labore consequatur</h4>
                      <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
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

export default Home;