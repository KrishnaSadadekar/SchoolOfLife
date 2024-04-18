import React from 'react';
import { CardImg, Card, CardBody, Button, CardTitle, CardSubtitle, CardText, CardGroup, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import UpdateProduct from './UpdateProduct';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


const Product = ({ course, update }) => {

  const deletecourse = (id) => {
    let token=`Bearer ${sessionStorage.getItem("data")}`;
    axios.delete(`http://localhost:8080/admin/delete/${id}`,{headers:{Authorization:token}}).then
      (
        (response) => {
          toast.success("Successfully deleted!");
          update(id);
        },
        (error) => {
          console.log(error)
          toast.error("Something went wrong!");
        }
      );
  }
  return (
    <Container>


      <Card>
        <Row>
          <Col md={6}>
            <CardImg
              alt="Card image cap"
              src={`./img/courses/${course.imgUrl}`}
              top
            // width="100%"

            />

          </Col>
          <Col>
            <CardBody>
              <CardTitle tag="h2">
                {course.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 d-flex justify-content-between align-items-center mb-3"
                tag="h4"
              >
                {course.type}
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <Container>
                <Link to={`/admin/update/${course.id}`} action="true"><Button className='m-2' color='primary'>Update</Button></Link>
                <Button className='m-2' color='success' onClick={() => { deletecourse(course.id) }} >Delete</Button>
              </Container>
            </CardBody>
          </Col>
        </Row>
      </Card>


    </Container>

  );
}

export default Product;