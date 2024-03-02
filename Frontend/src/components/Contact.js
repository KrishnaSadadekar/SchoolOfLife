import React, { useState ,useEffect } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Button,Form,Label,Input,FormGroup } from 'reactstrap';
import Axios from 'axios';
function Contact() {
  useEffect(() => {
    document.title = "Contact us";
  }, []);

  const [query, setQuery] = useState({ name:'', email:'',message: ''});

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
};


const handleSubmit = async (e) => {
  e.preventDefault();  // Add this line to prevent default form submission behavior
  alert('In HandleSubmit');
  try {
      alert('iNNNNN');
      console.log(query);
      const response = await Axios.post('http://localhost:8080/query', query);
      alert("Message Sent!"+response.data);
  } catch (error) {
      console.error('Error sending data:', error);
  }
};

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
        </div>
      </div>

      <iframe style={{ border: 0, width: '100%', height: '350px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen=""></iframe>
      {/* Main Section */}

      <div className="container aos-init aos-animate contact" data-aos="fade-up">

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0">

            <Form onSubmit={handleSubmit}>
              <Row>

                <Col md={6}>
                  <FormGroup>
                    <Label for="name">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      type="text"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Email
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>

              </Row>
              <FormGroup>
                <Label for="subject">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  onChange={handleChange}
                />
              </FormGroup>

              <Row>

                <FormGroup>
                  <Label for="message">
                    Message
                  </Label>
                  <Input
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    type="textarea"
                    onChange={handleChange}
                  />
                </FormGroup>


              </Row>
              <Container className='p-2'>
              <Button type='submit' style={{backgroundColor:"#5fcf80"}}> Send Message</Button>
              </Container>
            </Form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;
