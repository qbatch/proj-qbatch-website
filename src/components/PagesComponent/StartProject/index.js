import React, { lazy } from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = lazy(() => import("../../UiComponent/Container"));
const TestimonialCarousel = lazy(() => import('../../UiComponent/TestimonialSlider'));
const ContactForm = lazy(() => import('./contactForm'));

import StartProjectWrapper from "./style";

const Index = ({ page, heading, id }) => {
  const headingText = heading || "Start a Project";

  return (
    <StartProjectWrapper id={id}>
      <Container>
        <Row className="justify-content-between">
          <Col xxl={5} lg={5} className="order-2 order-lg-1">
            {page === 'contact' ? (
              <h1 className=" text-h2 color-primary">{headingText}</h1>
            ) : (
              <h2 className="color-primary">{headingText}</h2>
            )}
            <p className="subtitle">Work with the most friendly yet focused developers!</p>
            <ContactForm />
          </Col>
          <Col xxl={5} lg={6} className="order-1 order-lg-2">
            <div className="testimonials">
              <h3 className="color-primary text-h4 heading">Testimonials</h3>
              <p className="testimonial-paragraph">Here's what our clients have to say!</p>
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
