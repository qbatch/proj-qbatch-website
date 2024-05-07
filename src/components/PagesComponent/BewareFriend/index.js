import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "../../UiComponent/Container";

import BewareFriendWrapper from "./style";
import { bewareFriend } from "../../../constants"

const BewareFriend = () => {
  

  return (
    <BewareFriendWrapper>
      <Container>
        <div className="base-space">
          <Row>
            <Col lg={5} md={12} sm={12} xs={12}>
              <h2 className="color-primary heading text-h2">Beware Friend! Mistakes to Avoid in Your MVP Development</h2>
            </Col>
            <Col lg={7} md={12} sm={12} xs={12}>
              {bewareFriend.map((list, i) => {
                return (
                  <div className="d-flex skill-section justify-content-between skill" key={i}>
                    <div className="d-flex add-gap w-100 align-items-start">
                      <div>
                        <img src={list.img} alt={list.title}/>
                      </div>
                      <div className="w-100">
                        <h3 className="title text-h4">{list.title}</h3>
                        <p className="paragraph">{list.paragraph}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Col>
          </Row>
        </div>
      </Container>
    </BewareFriendWrapper>
  );
};

export default BewareFriend;
