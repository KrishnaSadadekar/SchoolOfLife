import React from 'react';
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom';
const Course = ({ course }) => {


  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">



      <div className="course-item">
      <img src={`./img/courses/${course.imgUrl}`} className="img-fluid" alt="..." />
 
        <div className="course-content">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>{course.category.categoryName}</h4>
            <p className="price">${course.price}</p>
          </div>

          <h3>{course.name}</h3>
          <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
          <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                  
                  <Link tag="a" to={`/course/${course.id}`} action="true"><Button className='m-2' color="success ml-3">Learn more</Button></Link>
                  </div>
                </div>

        </div>
      </div>





    </div>


  );
}

export default Course;