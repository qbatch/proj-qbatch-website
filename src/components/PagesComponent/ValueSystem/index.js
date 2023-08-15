import React from "react";
import { Col, Row } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import ValueSystemWrapper from "./style";

const values = [
  {
    icon: "/value-img-1.svg",
    title: "Curious",
    description: "Asking the right questions and relentlessly adapting.",
  },
  {
    icon: "/value-img-2.svg",
    title: "Brave",
    description: "We are courageously focused on impact over the status quo.",
  },
  {
    icon: "/value-img-3.svg",
    title: "Kind",
    description: "We live and preach an inclusive and collaborative atmosphere.",
  },
  {
    icon: "/value-img-4.svg",
    title: "Driven",
    description: "Led by purpose, demonstrated through professional excellence.",
  },
  {
    icon: "/value-img-5.svg",
    title: "Transparent",
    description: "We hold ourselves accountable for delivering the promises we make.",
  },
  {
    icon: "/value-img-6.svg",
    title: "Whimsical",
    description: "We’re always thinking of ways to build a more accessible and innovative future.",
  },
  {
    icon: "/value-img-7.svg",
    title: "Empower",
    description: "Empowering visionaries to build their ideas and own them.",
  },
  {
    icon: "/value-img-8.svg",
    title: "Intentional",
    description: "We know what we do and we do it with careful thought and purpose.",
  },
  {
    icon: "/value-img-9.svg",
    title: "Counter-Culture",
    description: "We don’t compete, we play our own game.",
  },
];

const Index = () => {
  return (
    <ValueSystemWrapper>
    <Container>
      <div className="heading-wrapper">
        <h4 className="underline-heading">
          It’s not about being different,
        </h4>
        <h2 className="heading">
          it’s about having a <span>“Value System”</span>
        </h2>
      </div>
  
      <div className="col-wrapper">
        <Row>
          {values.map((value, index) => (
            <Col lg={4} md={6} className="value-col" key={index}>
              <img className="value-icon" src={value.icon} alt={`Value Icon ${index}`} />
              <div className="col-inner">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  </ValueSystemWrapper>
  )
}

export default Index;