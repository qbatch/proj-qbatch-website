import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "../../UiComponent/Container";
import Divider from '../../UiComponent/Divider';
import ProcessWrapper from "./style";
const Index = () => {

  const list = [
    "Spectacular price-quality ratio",
    "Total Process Transparency ",
    "Cross-Sector Expertise",
    "100% Founders Mentality",
    "Pay-as-you-go Model",
    "Dependable Engineering Craftsmanship",
    "Neutral Software Analysis",
    "Technology Leadership",
    "Highly Solution Oriented",
    "Don’t Hire Just Rent ",
    "Executive-level Resource Under Budget",
    ""
  ];
  return (
    <>
      <Container>
        <ProcessWrapper>

          <Row className="g-5">
            <Col xl={6}>

              <span className="sub-heading">The Process Behind</span>
              <h2><span className="text-h2 color-primary heading">We Develop Browser Extensions Using 3 Building Blocks</span></h2>

              <p className="text-h5">At Qbatch, we ace browser extension development with fine UX/UI design and expert JavaScript developers for complex functionality implementation. Choose us for design precision and technical excellence in every extension.</p>
            </Col>
            <Col xl={6}>
              <div className="process-behind-wrapper flex-md-row flex-column">
                <img className="process-img" src={'/process-behind.png'} />
                <div className="process-behind-content-wrapper text-start">
                  <div className="inner-box">
                    <h3 className="text-h4">User Interface</h3>
                    <p>Our product designers create intuitive designs and interfaces for nice human experiences.</p>
                  </div>
                  <div className="inner-box">
                    <h3 className="text-h4">Content Scripts</h3>
                    <p>JavaScript files that run in the context of web pages for data assessment and extraction.</p>
                  </div>
                  <div className="inner-box">
                    <h3 className="text-h4">Background Scripts</h3>
                    <p>For monitoring and responding to events in the browser such as closing a tab, navigating to a new page, or removing a bookmark.</p>
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </ProcessWrapper>
      </Container>
      <Divider />
    </>
  );
};
export default Index;
