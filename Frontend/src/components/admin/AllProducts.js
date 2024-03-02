import React, { useState, useEffect } from 'react';
import Product from './Product';
import { CardGroup, CardColumns } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllProducts = () => {
    useEffect(() => {
        document.title = "All Courses";
    }, []);


    const getAllCoursesFromServer = () => {



        axios.get(`http://localhost:8080/all-courses`).then(
            (response) => {

                console.log(response.data);

                setProducts(response.data);

            }, (error) => {
                console.log(error);
                toast.error("Something went wrong!");
            }

        );
    };

    useEffect(() => {
        getAllCoursesFromServer();

    }, []);
    const [products, setProducts] = useState([]);

    const updateCourses = (id) => {
        setProducts(products.filter((c) => c.id !== id));
    }

    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <h2>All Courses</h2>
                    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                </div>

            </div>
            <section id="courses">

                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                        <CardColumns>          
                          {

                            products.length > 0 ? products.map((item) => <Product key={item.id} course={item} update={updateCourses} />) : "No Courses Available"

                        }
                        </CardColumns>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default AllProducts;