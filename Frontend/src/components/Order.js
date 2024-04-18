import React, { Fragment, useState } from 'react';
import { FormGroup, Button, Container, Row, Col } from 'reactstrap';
import Axios from 'axios';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useRazorpay from "react-razorpay";
import { useNavigate } from 'react-router-dom';
import { PaymentSuccess } from './SweetAlert';
const Order = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [rOrder, setrOrder] = useState([]);

    const [order, setOrder] = useState(
        {
            name: '', lastName: '', contactNumber: '', city: '',email:''
        }
    );

    const handleChange = (e) => {

        setOrder({ ...order, [e.target.name]: e.target.value });

    };


    const [Razorpay] = useRazorpay();

    const handlePayment = async (e) => {
        // alert('in handle payment');
        // alert(e.courseFees);

        const options = {
            key: "rzp_test_J4gQkx1Sk61kFL", // Enter the Key ID generated from the Dashboard
            amount: e.courseFees, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "School Of Life",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: e.razorId, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler: function (response) {
                // const d= Axios.post(`/payment-callback?orderId=${response.razorpay_order_id}&paymentId=${response.razorpay_payment_id}&signature=${response.razorpay_signature}`);
                PaymentSuccess();
                navigate('/allCourses');
                //    
            },
            prefill: {
                name: e.name,
                email: e.email,
                contact: e.contactNumber,
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#86db9f",
            },
        };

        const rzp1 = new Razorpay(options);


        // -------------------------
        rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert("----------" + response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Add this line to prevent default form submission behavior
        // alert('This is a simple alert!');
        try {
            const response = await Axios.post(`http://localhost:8080/create-order/${id}`, order);
            alert('In handle -2');
            console.log(response.data);
            setrOrder(response.data);
            console.log(rOrder);
            handlePayment(response.data);

        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <div>
            <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">
                <div className="container">
                    <h2>Order Place!</h2>
                    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                </div>

            </div>
            <Container className="mt-5 border">
                <h1 className="text-center">Fill the Details</h1>
                <Fragment>
                    <Row className="mt-4">
                        <Col md={6}>
                            <Form onSubmit={handleSubmit} className="mt-3">

                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                id="name"
                                                name="name"
                                                placeholder="Your Name"
                                                type="text"
                                                value={order.name}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Form.Label>Last Name</Form.Label>

                                            <Form.Control
                                                id="lastName"
                                                name="lastName"
                                                placeholder="LastName"
                                                type="text"
                                                value={order.lastName}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Form.Label>Contact Number</Form.Label>
                                            <Form.Control
                                                id="contactNumber"
                                                name="contactNumber"
                                                placeholder="Enter the contact Number"
                                                type="text"
                                                value={order.contactNumber}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Form.Label>City</Form.Label>
                                            <Form.Control
                                                id="city"
                                                name="city"
                                                placeholder="Enter the City"
                                                type="text"
                                                value={order.city}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                id="email"
                                                name="email"
                                                placeholder="Enter the email"
                                                type="text"
                                                value={order.email}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Container className='p-2'>
                                
                                    <Button type="submit" color="success">Pay Now!</Button>

                                </Container>

                            </Form>
                        </Col>
                        <Col >
                        
                        </Col>
                    </Row>
                        
                </Fragment>
                
            </Container>
            
        </div>
    );
};

export default Order;