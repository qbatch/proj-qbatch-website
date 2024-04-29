import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "../../UiComponent/Container";
import Divider from '../../UiComponent/Divider';
import ChooseCtoWrapper from "./style";

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
      <ChooseCtoWrapper>
        
        <Row>
          <Col md={12} lg={6}>
            <h2>
            <span className="sub-heading">Why Choose Our CTO as a Service?</span></h2>
            <span className="text-h2 color-primary heading">We want you to become a pioneer before the world calls you a laggard.</span>
          </Col>
          <Col md={12} lg={6}>
            <p className="upper-text-wrapper">
            Achieving your long-term and mission-critical business goals requires a combination of big
             brains and the right technical expertise. We can help you find the missing parts in your 
             technology adoption and transformation journey. How?
            </p>
            <div className="service-list">
              <Row>
                <Col md={6} lg={6} sm={12}>
                  <ul>
                    {list.slice(0, 6).map((service, index) => (
                      <li key={index}>
                        <span className="hash">-</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col md={6} lg={6} sm={12}>
                  <ul>
                    {list.slice(6, 11).map((service, index) => (
                      <li key={index}>
                        <span className="hash">-</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </ChooseCtoWrapper>
    </Container>
    <Divider />
    </>
  );
};
export default Index;
