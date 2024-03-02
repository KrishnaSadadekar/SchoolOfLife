import React from 'react';
import { Button } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CourseDetails = () => {

    const { id } = useParams();
    const [course, setCourse] = useState([]);
    
    const getCourseFromServer = (id) => {

        axios.get(`http://localhost:8080/course/${id}`).then(
            (response) => {
                
                setCourse(response.data);


            }, (error) => {
                console.log(error);
                toast.error("Something went wrong!");
            }

        );
    };

    useEffect(() => {


        getCourseFromServer(id);

    }, []);

    

    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <h2>Courses</h2>
                    
                    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                </div>
            </div>

           
            <section id="course-details" className="course-details">
                <div className="container aos-init aos-animate" data-aos="fade-up">

                    <div className="row">

                        <div className="col-lg-8">
                        <img src={`./img/${course.imgUrl}`}  alt="" />
                            
                            <h3>{course.name}</h3>
                            <p>
                                Qui et explicabo voluptatem et ab qui vero et voluptas. Sint voluptates temporibus quam autem. Atque nostrum voluptatum laudantium a doloremque enim et ut dicta. Nostrum ducimus est iure minima totam doloribus nisi ullam deserunt. Corporis aut officiis sit nihil est. Labore aut sapiente aperiam.
                                Qui voluptas qui vero ipsum ea voluptatem. Omnis et est. Voluptatem officia voluptatem adipisci et iusto provident doloremque consequatur. Quia et porro est. Et qui corrupti laudantium ipsa.
                                Eum quasi saepe aperiam qui delectus quaerat in. Vitae mollitia ipsa quam. Ipsa aut qui numquam eum iste est dolorum. Rem voluptas ut sit ut.
                            </p>
                        </div>
                        <div className="col-lg-4">

                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h5>Trainer</h5>
                                {
                                <p> {course.trainer ? course.trainer.name : 'N/A'}</p>
                                
                                
                                }

                            </div>

                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h5>Course Fee</h5>
                                <p>${course.price}</p>
                            </div>

                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h5>Available Seats</h5>
                                <p>{course.seats}</p>
                            </div>

                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h5>Schedule</h5>
                                <p>5.00 pm - 7.00 pm</p>
                            </div>

                            <div className='d-flex justify-content-end p-2'>
                            {course.seats>0?
                            ( <Link tag="a" to={`/order/${course.id}`}  action="true"><Button color='primary'>Pay now <span>&#8377;</span> {course.price}</Button></Link>)
                            :(<p>Seats are not Available</p>)}
                           
                            
                            </div>

                        </div>
                    </div>

                </div>
            </section>




        </div>


    );
}

export default CourseDetails;