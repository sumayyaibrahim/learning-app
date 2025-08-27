import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa"; 
import { MdEmail } from "react-icons/md";
import Footer from '../footer/Footer';

function Priicing() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='px-md-5'>
    <div className='w-100  p-5 d-md-flex justify-content-between gap-3 '>
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='w-md-50 bg-light p-2 border ' style={{boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px'}} >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="e-mail"
              placeholder="please enter e-mail id"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              enter your e-mail id
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>your message</Form.Label>
          <Form.Control type="text" placeholder="message" required />
          <Form.Control.Feedback type="invalid">
            Please provide message.
          </Form.Control.Feedback>
        </Form.Group>
        
        
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button style={{backgroundColor:'#1aa8a5' ,border:'#1aa8a5'}} type="submit">Send</Button>
    </Form>
    <div className='w-md-50  text-center p-4 mt-4 mt-md-0 ' style={{boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>

   
    <div className=' text-center '  style={{ boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}  >
    <h4>Contact Information</h4>
    <p> <FaPhoneAlt />+91 98765 15365</p>
    <p> <FaMapMarkerAlt />123 EduKart Lane, Knowledge City, 456789, India</p>
    <p> <MdEmail />support@edukart.com</p>
    </div>
    <div  className='p-4'style={{ boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <h4>
        STUDENT SUPPORT
      </h4>
      <p>Monday - Friday: 10:00 am - 6:00 pm</p>
      <p>Saturday: 10:00 am - 4:00 pm</p>
      <p>
        Sunday: Support via email only
      </p>
    </div>
     </div>

    </div>
    <Footer/>
    </div>
  );
}

export default Priicing;