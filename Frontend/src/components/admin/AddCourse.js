import React, { useEffect, Fragment, useState } from 'react';
import { CardImg, FormGroup, Button, Label, Input, Container, Row, Col } from 'reactstrap';
import Axios from 'axios';
import { Form } from 'react-bootstrap';
import { ErroAlert } from '../SweetAlert';
const AddCourse = () => {

    useEffect(() => {
        document.title = "Add Course";
    }, []);


    // Get Trainers name From Server
    console.log(Axios.defaults.headers.common.Authorization); 

    const getDataFromServer = () => {



        Axios.get(`http://localhost:8080/all-trainers`).then(
            (response) => {


                setTrainers(response.data);
                console.log(response.data);

            }, (error) => {
                // toast.error("Something went wrong!");

                ErroAlert();
                // ----------------------------------

            }

        );

        Axios.get(`http://localhost:8080/all-categories`).then(
            (response) => {


                setCategories(response.data);
                console.log(response.data);

            }, (error) => {
                // toast.error("Something went wrong!");

                ErroAlert();
                // ----------------------------------

            }

        );
    };

    useEffect(() => {
        getDataFromServer();

    }, []);



    const [trainers, setTrainers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [trainer, setTrainer] = useState('');
    // Add to server process
    let token=`Bearer ${sessionStorage.getItem("data")}`;
    console.log(token);
    const [course, setCourse] = useState({ name: '', description: '', seats: 0, price: 0 });
    const formData = new FormData();
    const [file, setFile] = useState(null);

    

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleTrainerChange = (e) => {
        setTrainer(e.target.value);
    };


    const handleCategoryChange = (e) => {

        setCategory(e.target.value);

    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };



    const handleUpload = async () => {
        console.log(course);
        formData.append('file', file);
        formData.append('course', JSON.stringify(course));
        formData.append('trainer', trainer);
        formData.append('category', category);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Add this line to prevent default form submission behavior
        handleUpload()
        alert('In handleSubmit');
        console.log(course);
        try {
            console.log("I am a handler");
            console.log(trainer);
            console.log(category);
            const response = await Axios.post('http://localhost:8080/admin/add_course', formData,{headers:{Authorization:token}});
            alert("Added")
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };
    const handleClear = () => {
        alert('In clear Handle');
        setCourse({ name: '', type: '', description: '', trainer: '', seats: 0, price: 0 });  // Set individual fields
        setFile(null);
        console.log('Cleared state:', course, file);
    };


    return (

        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <h2>Add Course</h2>

                    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                </div>
            </div>

            <Container className="mt-2 border">
                <Row>
                    <Col md={6}>
                        <h1 className="text-center">Add new Course</h1>
                        <Fragment>
                            <Form onSubmit={handleSubmit} className="mt-3">


                                <FormGroup>
                                    <Label
                                        for="courseName"

                                    >
                                        Course Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="couse-Name"
                                        type="text"
                                        value={course.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>


                                <FormGroup>
                                    <Label for="category">Select Category</Label>
                                    <div>
                                        <Form.Select
                                            name="category"
                                            id="category"
                                            value={category}
                                            onChange={handleCategoryChange}
                                        >
                                            <option value="" disabled>Select Category</option>
                                            {
                                                categories.map(option => (
                                                    <option key={option.cId} value={option.categoryName}>
                                                        {option.categoryName}
                                                    </option>
                                                ))

                                            }
                                        </Form.Select>
                                    </div>


                                </FormGroup>

                                <FormGroup>
                                    <Label
                                        for="description"

                                    >
                                        Description
                                    </Label>
                                    <Input
                                        id="description"
                                        name="description"
                                        placeholder="couse-Description"
                                        type="textarea"
                                        value={course.description}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="trainer">Select Trainer</Label>
                                    <div>
                                        <Form.Select
                                            name="trainer"
                                            id="trainer"
                                            value={trainer}
                                            onChange={handleTrainerChange}
                                        >
                                            <option value="" disabled>Select Trainer</option>
                                            {
                                                trainers.map(option => (
                                                    <option key={option.id} value={option.name}>
                                                        {option.name} {option.lastName}
                                                    </option>
                                                ))

                                            }
                                        </Form.Select>
                                    </div>
                                </FormGroup>

                                <FormGroup>
                                    <Label
                                        for="price"

                                    >
                                        Price
                                    </Label>
                                    <Input
                                        id="price"
                                        name="price"
                                        placeholder="Enter Price"
                                        type="number"
                                        value={course.price}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label
                                        for="seats"

                                    >
                                        Seats
                                    </Label>
                                    <Input
                                        id="seats"
                                        name="seats"
                                        placeholder="Enter Price"
                                        type="number"
                                        value={course.seats}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label
                                        for="courseImage"

                                    >
                                        Upload Image
                                    </Label>
                                    <Input
                                        id="courseImage"
                                        name="courseImage"
                                        type="file"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </FormGroup>


                                <Container className=''>
                                    <Button type="submit" color="success">Add Course</Button>
                                    <Button className="m-3" color="warning" onClick={handleClear}>Clear</Button>
                                </Container>

                            </Form>
                        </Fragment>
                    </Col>
                    <Col className='mt-6'>



                        <CardImg
                            alt="Card image cap"
                            src="./img/course-details-tab-2.png"
                            top
                            width="100%"
                            className='mt-2'

                        />





                    </Col>
                </Row>
            </Container></div>
    );
};

export default AddCourse;
