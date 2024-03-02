import React, { useState, useEffect } from 'react';
import Course from './Course';
import axios from 'axios';
import {ErroAlert} from './SweetAlert';
const AllCourses = () => {
  useEffect(() => {
    document.title = "All Courses";
  }, []);


  const getAllCoursesFromServer = () => {



    axios.get(`http://localhost:8080/all-courses`).then(
      (response) => {


        setCourses(response.data);

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

  const [courses, setCourses] = useState([]);


  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <h2>Courses</h2>
          <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
        </div>
      </div>

      <section id="courses" className="courses">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">

            {
              courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} />) : "No Courses Available"
            }
          </div>
        </div>
      </section>

    </div>
  );
};

export default AllCourses;