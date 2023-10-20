import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "gatsby";
import { Player, BigPlayButton, LoadingSpinner } from "video-react";
import "../../../../node_modules/video-react/dist/video-react.css";

import Container from "../../UiComponent/Container";
import Input from "../../UiComponent/Input";
import Collapse from "../../UiComponent/Collapse";
import RadioButton from "../../UiComponent/RadioButton";
import CheckBox from "../../UiComponent/CheckBox";
import Button from '../../UiComponent/Button';
import TestimonialCarousel from "../../UiComponent/TestimonialSlider"

import StartProjectWrapper from "./style";

const Index = () => {

  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState("");
  // const recaptchaRef = React.useRef();
  const [serviceOpen, setServiceOpen] = useState(false);

  const [serviceSelect, setServiceSelect] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setServiceSelect([...serviceSelect, e.target.value]);
    } else {
      setServiceSelect(serviceSelect.filter((item) => item !== e.target.value));
    }
  };
   const handleRecaptchaChange = (value) => {
     console.log("reCAPTCHA value:", value);
   };
  return (
    <StartProjectWrapper>
      <Container>
        <Row className="justify-content-between">
          <Col xxl={5} lg={5} className="order-2 order-lg-1">
            <h2 className="color-primary">Start a Project</h2>
            <p className="subtitle">Work with the most friendly yet focused developers!</p>
            <div className="project-form">
              <Input placeholder="Full Name" type="text" />
              <Input placeholder="Contact Number" type="text" />
              <Input placeholder="Email Address" type="email" />
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
                          checked={modal === value}
                          name="collaboration"
                          onChange={(e) => {
                            setModal(e.target.value)
                          }}
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
                    'DvOps & Cloud',
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
                            checked={serviceSelect.includes(value)}
                            value={value}
                            name="collaboration"
                            onChange={handleChange}
                          />
                        </Col>
                      )
                    })}
                </Row>
              </Collapse>
              <Input as="textarea" base="21px" height="53px" placeholder="Tell us about your project" type="email" />
              <div>
                <CheckBox
                  margin="-4px"
                  height="12px"
                  width="12px"
                  fontSize="12px"
                  base="5px"
                  label={
                    <>
                      I understand and agree to the
                      <Link className="ms-1" to="/">
                        Terms & Conditions
                      </Link>
                    </>
                  }
                  name="collaboration"
                />
                <CheckBox
                  margin="-4px"
                  height="12px"
                  width="12px"
                  fontSize="12px"
                  label="I agree to receive marketing and promotion related emials."
                  name="collaboration"
                  base="19px"
                />
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-1 mt-3">
                  <ReCAPTCHA sitekey="6LezlHQnAAAAAFZigM4rT1-ESPRHDcPGoxXpxoKz" onChange={handleRecaptchaChange} />
                  <Button text="Submit" className="pt-md-0 pt-3" />
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={5} lg={6} className="order-1 order-lg-2">
            <div className="testimonials">
              <h3 className="color-primary">Testimonials</h3>
              <p className="testimonial-paragraph">Here's what our clients have to say</p>
              <TestimonialCarousel />
            </div>
          </Col>
        </Row>
      </Container>
    </StartProjectWrapper>
  )
};
export default Index;
