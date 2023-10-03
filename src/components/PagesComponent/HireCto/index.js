import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

import Container from "../../UiComponent/Container/index";
import Button from "../../UiComponent/Button/index";

import HireCtoWrapper from "./style";

const Index = () => {
  const list = [
    "Got a powerful idea but cannot cope with a tech part?",
    "Hesitant about whether the selected tech stack is right?",
    "Got an MVP but not sure how to gain the trust of investors?",
    "Are you a mature startup but cannot outperform its competitors?",
    "Is your business already big enough, but got some internal infrastructure issues?",
    "Can’t afford a full-time CTO and need a temporary CTO?",
  ];
  return (
    <HireCtoWrapper>
      <Container>
        <div className="text-center">
          <h2 className="color-primary mb-1">
            Do you really need to hire a CTO? 
          </h2>
          <h2 className="color-primary"> Find for yourself</h2>
        </div>
        <div>
          <ListGroup>
            {list.map((service, index) => (
              <ListGroup.Item as="li" key={index}>
                <div className="grey-box" />
                <span> {service}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="d-flex justify-content-center">
          <Button text="Stuck in a different situation?" />
        </div>
      </Container>
    </HireCtoWrapper>
  );
};
export default Index;
