import React, { useState, useEffect } from 'react';
import { FormGroup, Button, Label, Input, Container, Row, Col, CardTitle } from 'reactstrap';
import { Card, CardGroup, CardImg } from 'reactstrap';
import Axios from 'axios';
import { Form } from 'react-bootstrap';
import loginAdmin from '../services/Service';
import { doLogin, isLogin } from '../auth/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    useEffect(() => {
        document.title = "Login";
    }, []);
    const navigate = useNavigate();
    const [LoginDetail, setLoginDetail] = useState(
        {
            email: '',
            password: ''
        });


    const handleChange = (e) => {
        setLoginDetail({ ...LoginDetail, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("in HandleSubmit");
        if (LoginDetail.email.trim() == '' || LoginDetail.password.trim() == '') {
            alert('Please Enter the username and password!');
            return '';
        }

        console.log(LoginDetail);
        
        try {
            const data = await loginAdmin(LoginDetail);  // Call loginAdmin correctly
            console.log(data);
            
            if (data !== null) {
                console.log('Login Successfully');
                
                navigate('/allProducts');
                window.location.reload();
            } else {
                alert('Invalid username and password!');
            }
        } catch (error) {
            console.log('login error!')
        }


    };

    const handleClear = () => {
        // alert('In clear Handle');
        setLoginDetail({ email: '', password: '' });

    };




    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <h2>Login Here!</h2>

                    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                </div>
            </div>


            <Container className="mt-6 border">

                <Row>
                    <Col md={6}>

                        <CardTitle tag="h2" className="mt-2">
                            Admin Login
                        </CardTitle>

                        <Form onSubmit={handleSubmit} className="mt-5">


                            <FormGroup>
                                <Label
                                    for="email"

                                >
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    type="text"
                                    value={LoginDetail.email}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label
                                    for="password"

                                >
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    placeholder="Enter password"
                                    type="text"
                                    value={LoginDetail.password}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>






                            <Container className=''>
                                <Button type="submit" color="success">Login</Button>
                                <Button className="m-3" color="warning" onClick={handleClear}>Clear</Button>
                            </Container>

                        </Form>

                    </Col>

                    <Col md={6}>

                        <CardGroup className='pb-5 pt-2'>
                            <Card>
                                <CardImg
                                    alt="Card image cap"
                                    src="./img/course-details-tab-1.png"
                                    top
                                    width="100%"

                                />

                            </Card>

                        </CardGroup>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;