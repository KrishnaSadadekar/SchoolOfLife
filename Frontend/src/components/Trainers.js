import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ErroAlert } from './SweetAlert';
function Trainers() {
  useEffect(() => {
    document.title = "Trainers";
  }, []);

  const getAllCoursesFromServer = () => {



    axios.get(`http://localhost:8080/all-trainers`).then(
      (response) => {


        setTrainers(response.data);

      }, (error) => {
        // toast.error("Something went wrong!");

        ErroAlert();
        // ----------------------------------

      }

    );
  };

  useEffect(() => {
    getAllCoursesFromServer();

  }, []);

  const [trainers, setTrainers] = useState([]);





  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <h2>Trainers</h2>
          <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
        </div>
      </div>

      {/* -- ======= Trainers Section =======  */}
      <section id="trainers" className="trainers">
        <div className="container aos-init aos-animate" data-aos="fade-up">

          <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            {
              trainers.length > 0 ? trainers.map((item) =>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="member">
                    <img src={`./img/trainers/${item.imgUrl}`} className="img-fluid" alt="" />
                    <div className="member-content">
                      <h4>{item.name} {item.lastName}</h4>
                      <span>Marketing</span>
                      <p>
                        Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                      </p>
                      <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>


                  </div>


                </div>
              ) : "No data is available"


            }

          </div>

        </div>
      </section>
    </div>
  );
}

export default Trainers;