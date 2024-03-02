import React, { Fragment, useState } from 'react';
import { FormGroup, Button, Label, Input, Container, Row, Col, CardTitle } from 'reactstrap';
import { Card, CardGroup, CardImg } from 'reactstrap';
import Axios from 'axios';
import { Form } from 'react-bootstrap';

const AddCategory = () => {

    const [category, setCategory] = useState('');


    const handleChange = (e) => {
        setCategory(e.target.value);
        console.log(category);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("in HandleSubmit");
        console.log(category);

        let token=`Bearer ${sessionStorage.getItem("data")}`;
        try {
            alert('Before Axios request!');
            alert(sessionStorage.getItem('data'));
            const response = await Axios.post(`http://localhost:8080/admin/add_category`,category,{headers:{Authorization:token}});
            alert("Added");

        } catch (error) {
            alert(error.response.data);
            console.error('Error sending data:', error);
        }
    };

    const handleClear = () => {
        alert('In clear Handle');
        setCategory('');  // Set individual fields


    };

    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <h2>Add Category</h2>

                    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                </div>
            </div>


            <Container className="mt-6 border">

                <Row>
                    <Col md={6}>

                        <CardTitle tag="h2" className="mt-2">
                            Fill The Details
                        </CardTitle>

                        <Form onSubmit={handleSubmit} className="mt-5">


                            <FormGroup>
                                <Label
                                    for="categoryName"

                                >
                                    Category Name
                                </Label>
                                <Input
                                    id="categoryName"
                                    name="categoryName"
                                    placeholder="Category Name"
                                    type="text"
                                    value={category}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>






                            <Container className=''>
                                <Button type="submit" color="success">Add Categoty</Button>
                                <Button className="m-3" color="warning" onClick={handleClear}>Clear</Button>
                            </Container>

                        </Form>

                    </Col>

                    <Col md={6}>

                        <CardGroup className='pb-5 pt-2'>
                            <Card>
                                <CardImg
                                    alt="Card image cap"
                                    src="./img/course-1.jpg"
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
};

export default AddCategory;
