import React from "react";
import WhatWeDoWrapper from "./style";

import { Row, Col } from "react-bootstrap";

import Button from "../../../components/UiComponent/Button"
import Divider from '../../../components/UiComponent/Divider'
import Container from '../../../components/UiComponent/Container'

import { weDoData } from "../../../constants";

const Index = () => {
  
  return (
    <WhatWeDoWrapper>
      <Container>
        <div className="base-space">
          <div className="d-flex flex-column align-items-center text-center section-heading">
            <h2 className="text-h1 heading">What can we do for you?</h2>
            <p>
              Gain an unfair advantage over your competitors with our goal-oriented approach, mandatory quality audits,
              and transparent processes from start to end. 
            </p>
          </div>
          <div className="services-provided">
            <Row>
              {weDoData.map((data, i) => (
                <Col xl={4} md={6} sm={12} key={i}>
                  <div className={i !== 5 ? "service" : ""}>
                    {i === 5 ? (
                      <div className="services-btn">
                        <Button text="View All Services" />
                      </div>
                    ) : (
                      <div className="d-flex align-items-start">
                        <div className="mt-2">
                          <img src={data.icon} />
                        </div>
                        <div className="do-title">
                          <h3 className="text-h4 heading">{data.title}</h3>
                          <p className="paragraph">{data.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
      <Divider />
    </WhatWeDoWrapper>
  );
};

export default Index;
