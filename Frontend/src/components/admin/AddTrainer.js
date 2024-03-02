import React, { Fragment, useState } from 'react';
import { FormGroup, Button, Label, Input, Container, Row, Col, CardTitle } from 'reactstrap';
import { Card,  CardGroup, CardImg } from 'reactstrap';
import Axios from 'axios';
import { Form } from 'react-bootstrap';

const AddTrainer = () => {

    const [trainer, setTrainer] = useState({ name: '', lastName: '' });
    const [file, setFile] = useState(null);

    const formData = new FormData();

    const handleChange = (e) => {
        setTrainer({ ...trainer, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        formData.append('file', file);
        formData.append('trainer', JSON.stringify(trainer));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleUpload(); // Move handleUpload() call here

        let token=`Bearer ${sessionStorage.getItem("data")}`;

        try {
            alert('Before Axios request!');
            const response = await Axios.post(`http://localhost:8080/admin/add_trainer`, formData,{headers:{Authorization:token}});
            alert("Added");

        } catch (error) {
            alert(error.response.data);
            console.error('Error sending data:', error);
        }
    };

    const handleClear = () => {
        alert('In clear Handle');
        setTrainer({ name: '', lastName: '' });  // Set individual fields
        setFile(null);
        console.log('Cleared state:', trainer, file);
    };

    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <h2>Add Trainer</h2>

                    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                </div>
            </div>


            <Container className="mt-6 border">

                <Row>
                    <Col md={6}>

                        <CardTitle tag="h2" className="mt-2">
                            Fill The Details
                        </CardTitle>
                        <Fragment className="mt-2">
                            <Form onSubmit={handleSubmit} className="mt-5" encType="multipart/form-data">


                                <FormGroup>
                                    <Label
                                        for="name"

                                    >
                                        TrainerName
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Trainer-Name"
                                        type="text"
                                        value={trainer.name}    
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>


                                <FormGroup>
                                    <Label
                                        for="lastName"

                                    >

                                    </Label>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Enter last Name"
                                        type="text"
                                        value={trainer.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>


                                <FormGroup>
                                    <Label
                                        for="trainerImage"

                                    >

                                    </Label>
                                    <Input
                                        id="trainerImage"
                                        name="trainerImage"
                                           
                                        type="file"

                                        onChange={handleFileChange}
                                    />
                                </FormGroup>




                                <Container className=''>
                                    <Button type="submit" color="success">Add Course</Button>
                                    <Button className="m-3" color="warning" onClick={handleClear}>Clear</Button>
                                </Container>

                            </Form>
                        </Fragment>
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

export default AddTrainer;
