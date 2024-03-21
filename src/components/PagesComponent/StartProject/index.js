import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "gatsby";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../../node_modules/video-react/dist/video-react.css";

import Container from "../../UiComponent/Container";
import Input from "../../UiComponent/Input";
import Collapse from "../../UiComponent/Collapse";
import RadioButton from "../../UiComponent/RadioButton";
import CheckBox from "../../UiComponent/CheckBox";
import Button from "../../UiComponent/Button";
import TestimonialCarousel from "../../UiComponent/TestimonialSlider";

import StartProjectWrapper from "./style";

const Index = ({ page }) => {
  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);

  const [serviceSelect, setServiceSelect] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    collaboration: "",
    services: [],
    description: "",
    terms: false,
    promotion: false,
  });

  const toggleCheckbox = (name) => {
    setFormData({
      ...formData,
      [name]: !formData.terms,
    });
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData({ ...formData, services: [...formData.services, value] });
      } else {
        setFormData({
          ...formData,
          services: formData.services.filter((service) => service !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e) => {
    setSubmitted(true);
    e.preventDefault();
    const validForm = e.currentTarget;
    if (validForm.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    if (formData.terms === true) {
      try {
        const response = await fetch("https://cms.qbatch.com/api/contacts", {
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
          setValidated(false);
          setFormData({
            name: "",
            number: "",
            email: "",
            collaboration: "",
            services: [],
            description: "",
            terms: false,
            promotion: false,
          });
        } else {
          toast.error("Something went wrong", {
            position: "top-right",
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error("Error", error);
      }
    }
  };  
  return (
    <StartProjectWrapper>
      <Container>
        <Row className="justify-content-between">
          <Col xxl={5} lg={5} className="order-2 order-lg-1">
            {page === 'contact' ? (
              <h1 className=" text-h2 color-primary">Start a Project</h1>
            ) : (
              <h2 className="color-primary">Start a Project</h2>
            )}
            <p className="subtitle">Work with the most friendly yet focused developers!</p>
            <Form className="project-form" noValidate validated={validated} onSubmit={handleSubmit}>
              <Input
                placeholder="Full Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required={true}
              />
              <Input
                placeholder="Contact Number"
                name="number"
                type="number"
                value={formData.number}
                onChange={handleInputChange}
                required={true}
              />
              <Input
                placeholder="Email Address"
                value={formData.email}
                name="email"
                type="email"
                onChange={handleInputChange}
                required={true}
              />
              <Collapse
                title="Select Collaboration Model"
                onClick={() => setOpen(!open)}
                open={open}
                content={
                  <div className={!open && modal ? 'add-height' : 'zero-height'}>
                    <RadioButton type="radio" label={modal} value={modal} checked={modal} name="collaboration" />
                  </div>
                }
              >
                <div className="seperation d-flex justify-content-between"></div>
                {['Time and Material', 'Fixed Scope Product Development', 'Hire Dedicated Development Team'].map(
                  (value) => {
                    return (
                      <div className="collapse-radio">
                        <RadioButton
                          key={value}
                          type="radio"
                          label={value}
                          value={value}
                          checked={formData.collaboration === value}
                          name="collaboration"
                          onChange={handleInputChange}
                        />
                      </div>
                    )
                  }
                )}
              </Collapse>

              <Collapse
                content={
                  <div
                    className={!serviceOpen && serviceSelect.length > 0 && serviceSelect ? 'add-height' : 'zero-height'}
                  >
                    <Row>
                      {serviceSelect.slice(0.6).map((value, key) => {
                        return (
                          <Col md={6}>
                            <CheckBox
                              key={key}
                              label={value}
                              checked={serviceSelect.includes(value)}
                              value={value}
                              name="collaboration"
                              onChange={(e) =>
                                setServiceSelect(serviceSelect.filter((item) => item !== e.target.value))
                              }
                            />
                          </Col>
                        )
                      })}
                    </Row>
                  </div>
                }
                title="Select Service(s)"
                onClick={() => setServiceOpen(!serviceOpen)}
                open={serviceOpen}
              >
                <div className="seperation d-flex justify-content-between"></div>
                <Row>
                  {[
                    'Design & Development',
                    'MVP Development',
                    'Mobile App Development',
                    'CTO as a Service',
                    'Enterprise Software Development',
                    'DevOps & Cloud',
                    'Mobile Development',
                    'Web App Development',
                    'E-Commerce Automation Services',
                    'Other',
                  ]
                    .slice(0.6)
                    .map((value) => {
                      return (
                        <Col md={6}>
                          <CheckBox
                            key={value}
                            label={value}
                            checked={formData.services?.includes(value)}
                            value={value}
                            name="services"
                            onChange={handleInputChange}
                          />
                        </Col>
                      )
                    })}
                </Row>
              </Collapse>
              <Input
                as="textarea"
                base="21px"
                name="description"
                height="53px"
                placeholder="Tell us about your project"
                onChange={handleInputChange}
                value={formData.description}
              />
              <div>
                <CheckBox
                  margin="-4px"
                  height="12px"
                  width="12px"
                  fontSize="12px"
                  base="5px"
                  onChange={() => toggleCheckbox('terms')}
                  required={true}
                  label={
                    <>
                      I understand and agree to the
                      <Link className="ms-1" to="/terms-and-conditions">
                        Terms & Conditions
                      </Link>
                    </>
                  }
                  name="terms"
                />
                <CheckBox
                  margin="-4px"
                  height="12px"
                  width="12px"
                  fontSize="12px"
                  label="I agree to receive marketing and promotion related emails."
                  name="promotion"
                  base="19px"
                  onChange={() => toggleCheckbox('promotion')}
                />
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-1 mt-3">
                  {/* <ReCaptcha
                    action="homepage"
                    siteKey="6Lc47vwoAAAAAPn5GzX7tbV_mwo92EogNVvNeR0l"
                    onVerify={(token) => submit(token)}
                    submitted={submitted}
                  /> */}
                  <Button text="Submit" btnType="submit" className="pt-md-0 pt-3" />
                </div>
              </div>
            </Form>
          </Col>
          <Col xxl={5} lg={6} className="order-1 order-lg-2">
            <div className="testimonials">
              <h3 className="color-primary text-h4">Testimonials</h3>
              <p className="testimonial-paragraph">Here's what our clients have to say</p>
              <TestimonialCarousel />
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </StartProjectWrapper>
  )
};
export default Index;
