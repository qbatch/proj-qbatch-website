import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

import Container from "../../UiComponent/Container/index";
import Button from '../../UiComponent/Button/index';
import Divider from '../../UiComponent/Divider'

import HireCtoWrapper from "./style";

const Index = ({ list, btnText, groupClass, heading, paragraph }) => {
  return (
    <>
    <Container>
        <HireCtoWrapper  className={groupClass}>
          <div className="text-center">
            <h2 className="color-primary mb-1 heading">
              {heading }
            </h2>
          </div>
          <div>
            <ListGroup>
              {list.map((service, index) => (
                <ListGroup.Item as="li" key={index}>
                  <img className="me-4 service-icon" src={service.img} alt="no-service" />
                  <span> {service.description}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <p className="text-center paragraph">{paragraph}</p>
          <div className="d-flex justify-content-center">
           <Button text={btnText} />
          </div>
        </HireCtoWrapper>
      </Container>
      <Divider />
    </>
  );
};
export default Index;
