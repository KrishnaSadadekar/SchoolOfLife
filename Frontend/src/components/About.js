import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import PureCounter from "@srexi/purecounterjs";
function About() {
  useEffect(() => {
    document.title = "About us";
  }, []);

  
  
  return (
    <div>
      <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">
        <div className="container">
          <h2>About Us</h2>
          <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
        </div>
      </div>
      
      <section id="counts" className="counts section-bg">
        <div className="container">

          <div className="row counters">

            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="0" className="purecounter">1232</span>
              <p>Students</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="0" className="purecounter">64</span>
              <p>Courses</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="0" className="purecounter">42</span>
              <p>Events</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="0" className="purecounter">15</span>
              <p>Trainers</p>
            </div>

          </div>

        </div>

       
      </section>


      {/* Tesimony */}

      
    </div>
  );
}

export default About;