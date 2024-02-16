import React, { useState } from "react";
import EventsFormWrapper from './style';
import Container from '../../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ButtonArrow from '../../../../../static/event-btn-arrow.svg'
import FormVector from '../../../../../static/event-form-vector-1.svg'

const EventsForm = () => {

  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    meetingType: "",
    companyName: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  };
  console.log(formData, 'name')
  const handleSubmit = async (e) => {
    setSubmitted(true);
    e.preventDefault();
    const validForm = e.currentTarget;
    if (validForm.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
      try {
        const response = await fetch("https://cms.qbatch.com/api/book-meetings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: formData }),
        });

        if (response.ok) {
          toast.success("Message sent successfully...", {
            position: "top-right",
            autoClose: 5000,
          });
          setFormData({
            name: "",
            contactNo: "",
            email: "",
            meetingType: "",
            companyName: "",
          })
        } else {
          toast.error("Something went wrong", {
            position: "top-right",
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error("Error", error);
      }
    
  };
  return (
    <EventsFormWrapper>
      <div className='section-bg'>
        <div className='left-box'>
          <img src={FormVector} />
        </div>
        <div className='right-box'></div>
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='section-box-left'>
              <p className='text-h3 paragraph'>
              Qbatch is excited to exhibit at the most influential e-commerce marketplace show. Let’s catch up and explore the cutting-edge developments in selling, white label, retailer, and supplier markets.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className='form-wrapper'>
              <p className='form-paragraph'>Effortless Networking Without The Chase</p>
              <h2 className='form-heading'>BOOK A MEETING</h2>
              <form className='event-input-form' noValidate validated={validated} onSubmit={handleSubmit}>
                <input type='text' name="name" value={formData.name} onChange={handleInputChange} placeholder='Name'/>
                <input type='text' name="email" value={formData.email} onChange={handleInputChange}  placeholder='Email'/>
                <input type='text' name="contactNo" value={formData.contactNo} onChange={handleInputChange}   placeholder='Contact Number'/>
                <input type='text' name="companyName" value={formData.companyName} onChange={handleInputChange}  placeholder='Company'/>
                <label>How would you like to meet us?</label>
                <select value={formData.meetingType} name="meetingType" onChange={handleInputChange}>
                  <option>In-Person</option>
                  <option>In-Person1</option>
                  <option>In-Person2</option>
                </select>
                <button type='submit'>Let’s Meet<img src={ButtonArrow} alt='arrow' /></button>
              </form>
              <div className='text-center'>
                <p>Or <a href='#'><i>schedule a meeting at your convenience</i></a></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </EventsFormWrapper>
  );
};

export default EventsForm;