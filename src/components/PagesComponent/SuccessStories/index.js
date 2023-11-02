import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { StoriesWrapper, ImageOpenStyle } from "./style";

import PrimaryButton from "../../UiComponent/PrimaryButton";
import Container from "../../UiComponent/Container";
import { stories } from "../../../constants";

const Index = () => {
  return (
    <StoriesWrapper>
      <Container>
        <h2 className="color-primary heading text-h1">Our Success Stories</h2>
        <p className="desc">
          Our Success Stories Innovators from across the industry have trusted
          Qbatch to build high-impact products
        </p>
        <Row className="wrapper">
          {stories.map((item, index) => (
            <Col xl={item.imgOpen ? 8 : 4}>
              <div className="column" key={index}>
                <div
                  className={`column-inner ${
                    item.imgOpen ? "primary-boder" : ""
                  }`}
                >
                  {item.imgOpen ? (
                    <ImageOpenStyle src={item.imgOpen}></ImageOpenStyle>
                  ) : (
                    <div className="close-small-img">
                      <ImageOpenStyle src={item.imgClose} type="close"></ImageOpenStyle>
                    </div>
                  )}
                  <div
                    className={`column-inner-right ${
                      item.imgClose ? "close-column-inner" : ""
                    }`}
                  >
                    <div className="close-image">
                      <img src={item.imgClose} alt="story" />
                    </div>
                    <div className="content">
                      <img className="logo" src={item.logo} />
                      <h3>{item.title}</h3>
                      <p className="paragraph">{item.description}</p>
                      <div className="badge">
                        {item.badge.map((badge) => (
                          <span>{badge}</span>
                        ))}
                      </div>
                    </div>
                    <PrimaryButton text="View Details" />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </StoriesWrapper>
  );
};

export default Index;
