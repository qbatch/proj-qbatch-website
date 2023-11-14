import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

import Container from "../../UiComponent/Container/index";
import Button from '../../UiComponent/Button/index';
import Divider from '../../UiComponent/Divider'

import HireCtoWrapper from "./style";

const Index = () => {
  const list = [
    {
      img: '/hire-a-cto_powerful-idea.svg',
      description: 'Got a powerful idea but cannot cope with a tech part?',
    },
    {
      img: '/hire-a-cto_selected-tech-stack.svg',
      description: 'Hesitant about whether the selected tech stack is right?',
    },
    {
      img: '/hire-a-cto_gain-the-trust.svg',
      description: 'Got a powerful idea but cannot cope with a tech part?',
    },
    {
      img: '/hire-a-cto_mature-startup.svg',
      description: 'Are you a mature startup but cannot outperform its competitors?',
    },
    {
      img: '/hire-a-cto_interenal-infrastructure-issues.svg',
      description: 'Is your business already big enough, but got some internal infrastructure issues?',
    },
    {
      img: '/hire-a-cto_cant-afford-cto.svg',
      description: 'Can’t afford a full-time CTO and need a temporary CTO?',
    },
  ]
  return (
    <>
    <Container>
      <HireCtoWrapper>
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
                <img className="me-4" src={service.img} alt="no-service" />
                <span> {service.description}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="d-flex justify-content-center">
          <Button text="Stuck in a different situation?" />
        </div>
      </HireCtoWrapper>
    </Container>
    <Divider />
    </>
  );
};
export default Index;
