import React from "react";
import styled from "styled-components";
import WhatWeDoWrapper from "./style";

import { Row, Col } from "react-bootstrap";

import LounchIcon from "../../../assets/images/icons/lounch-icon.svg";
import ExpandIcon from "../../../assets/images/icons/expand-icon.svg";
import AdviceIcon from "../../../assets/images/icons/advice-icon.svg";
import CreateDesignIcon from "../../../assets/images/icons/create-design-icon.svg";
import TransformIcon from "../../../assets/images/icons/transform-icon.svg";

import Button from "../../../components/UiComponent/Button"
import Divider from '../../../components/UiComponent/Divider'
import Container from '../../../components/UiComponent/Container'

const weDoData = [
  {
    id: 1,
    icon: <LounchIcon />,
    title: "Develop an MVP",
    desc: "Launch foolproof MVPs that stand \n the test of time.",
  },
  {
    id: 2,
    icon: <ExpandIcon />,
    title: "Expand Your Team",
    desc: "Get the best returns on investment \n with our hi-tech industry experts.",
  },
  {
    id: 3,
    icon: <AdviceIcon />,
    title: "Get CTO’s advice",
    desc: "Know what the market leaders have to \n say to grow your technical footprint.",
  },
  {
    id: 4,
    icon: <CreateDesignIcon />,
    title: "Create a design",
    desc: "We live and breathe design thinking. \n Take advantage!",
  },
  {
    id: 5,
    icon: <TransformIcon />,
    title: "Transform your enterprise",
    desc: "Stop chasing the trends and start building \n your enterprise differentiator.",
  },
  {
    id: 6,
  },
];

const Index = () => {
  
  return (
    <WhatWeDoWrapper>
      <Container>
        <div className="base-space">
          <div className="d-flex flex-column align-items-center text-center do-heading">
            <h1 className="heading">What can we do for you?</h1>
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
                        <div className="mt-2">{data.icon}</div>
                        <div className="do-title">
                          <h4>{data.title}</h4>
                          <span>{data.desc}</span>
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
