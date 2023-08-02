import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "gatsby";
import { Player, BigPlayButton, LoadingSpinner } from "video-react";
import "../../../../node_modules/video-react/dist/video-react.css";

import Container from "../../UiComponent/Container";
import Input from "../../UiComponent/Input";
import Select from "../../UiComponent/Collapse";
import RadioButton from "../../UiComponent/RadioButton";
import CheckBox from "../../UiComponent/CheckBox";
import Button from '../../UiComponent/Button';

import ArrowDown from "../../../assets/images/collapse-down.svg";
import StartProjectWrapper from "./style";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState("");
  const recaptchaRef = React.useRef();
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
     // This function will be called when the user completes the reCAPTCHA challenge
     console.log("reCAPTCHA value:", value);
   };
  return (
    <StartProjectWrapper>
      <Container>
        <Row className="justify-content-between">
          <Col lg={5} md={6} sm={12} xs={12}>
            <h2 className="color-primary">Start a Project</h2>
            <p>Work with the most friendly yet focused developers!</p>
            <div className="mt-4">
              <Input placeholder="Full Name" type="text" />
              <Input placeholder="Contact Number" type="text" />
              <Input placeholder="Email Address" type="email" />
              <Select title="Select Collaboration Model" onClick={() => setOpen(true)} open={open}>
                <div className="seperation d-flex justify-content-between">
                  <span>Select Collaboration Model</span>
                  <ArrowDown className="pointer" onClick={() => setOpen(false)} />
                </div>
                {["Time and Material", "Fixed Scope Product Development", "Hire Dedicated Development Team"].map(
                  (value) => {
                    return (
                      <RadioButton
                        type="radio"
                        label={value}
                        value={value}
                        checked={modal === value}
                        name="collaboration"
                        onChange={(e) => setModal(e.target.value)}
                      />
                    );
                  }
                )}
                {modal !== "" ? (
                  <>
                    <div className="seperation d-flex justify-content-between">
                      <span>Select Collaboration Model</span>
                      <ArrowDown className="pointer" onClick={() => setOpen(false)} />
                    </div>
                    {[modal].map((value) => {
                      return (
                        <RadioButton
                          type="radio"
                          label={value}
                          value={value}
                          name="dedicated"
                          onChange={(e) => setModal(e.target.value)}
                        />
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </Select>

              <Select title="Select Service(s)" onClick={() => setServiceOpen(true)} open={serviceOpen}>
                <div className="seperation d-flex justify-content-between">
                  <span>Select Service(s)</span>
                  <ArrowDown className="pointer" onClick={() => setServiceOpen(false)} />
                </div>
                <Row>
                  {[
                    "Design & Development",
                    "MVP Development",
                    "Mobile App Development",
                    "CTO as a Service",
                    "Enterprise Software Development",
                    "DvOps & Cloud",
                    "Mobile Development",
                    "Web App Development",
                    "E-Commerce Automation Services",
                    "Other",
                  ]
                    .slice(0.6)
                    .map((value) => {
                      return (
                        <Col md={6}>
                          <CheckBox
                            label={value}
                            checked={serviceSelect.includes(value)}
                            value={value}
                            className="abc"
                            name="collaboration"
                            onChange={handleChange}
                          />
                        </Col>
                      );
                    })}
                </Row>
                {serviceSelect.length > 0 && serviceSelect ? (
                  <>
                    <div className="seperation d-flex justify-content-between">
                      <span>Select Service(s)</span>
                      <ArrowDown className="pointer" onClick={() => setServiceOpen(false)} />
                    </div>
                    <Row>
                      {serviceSelect.slice(0.6).map((value) => {
                        return (
                          <Col md={6}>
                            <CheckBox
                              label={value}
                              checked={serviceSelect.includes(value)}
                              value={value}
                              name="collaboration"
                              onChange={(e) =>
                                setServiceSelect(serviceSelect.filter((item) => item !== e.target.value))
                              }
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  </>
                ) : (
                  ""
                )}
              </Select>
              <Input
                as="textarea"
                marginBottom="21px"
                height="53px"
                placeholder="Tell us about your project"
                type="email"
              />
              <div>
                <CheckBox
                  marginLeft="-4px"
                  height="12px"
                  width="12px"
                  fontSize="12px"
                  marginBottom="5px"
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
                  marginLeft="-4px"
                  height="12px"
                  width="12px"
                  fontSize="12px"
                  label="I agree to receive marketing and promotion related emials."
                  name="collaboration"
                  marginBottom="19px"
                />
                <div className="d-flex justify-content-between mt-3">
                  <ReCAPTCHA sitekey="6LezlHQnAAAAAFZigM4rT1-ESPRHDcPGoxXpxoKz" onChange={handleRecaptchaChange} />
                  <Button text="Submit" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5} md={6} sm={12} xs={12}>
            <div className="testimonials">
              <h4 className="color-primary">Testimonials</h4>
              <p>Here's what our clients have to say</p>
              <div className="video-box">
                <Player
                  playsInline
                  poster="/assets/poster.png"
                  src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
                >
                  <BigPlayButton position="center" />
                  <LoadingSpinner />
                </Player>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StartProjectWrapper>
  );
};
export default Index;
