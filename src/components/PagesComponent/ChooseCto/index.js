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
            <h2 className="color-primary">
            <span className="sub-heading">Why Choose Our CTO as a Service?</span>We want you to become a pioneer before the world calls you a laggard.</h2>
          </Col>
          <Col md={12} lg={6}>
            <p>
              Big brains and the right technical expertise are two key ingredients to achieving your long-term and
              mission-critical business goals. We can help you figure out what you’ve been missing in your technology
              adoption and transformation journey.{" "}
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
