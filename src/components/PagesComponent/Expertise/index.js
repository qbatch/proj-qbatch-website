import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import FullStack from '../../../assets/images/full-stack-development.svg'
import MobileApp from "../../../assets/images/mobile-development.svg";
import UIUX from "../../../assets/images/uiux-design.svg";
import SupplyChain from "../../../assets/images/supply-chain.svg";
import Cloud from "../../../assets/images/cloud-devop.svg";
import PRAService from '../../../assets/images/rpa-service.svg';
import Button from '../../UiComponent/Button'
import ExpertiseWrapper from "./style";

const Index = () => {
    const experties = [
      {
        img: FullStack,
        title: "Full Stack Web Development",
        badge: ["Chip/Label ", "RubyOnRails", "Django"],
      },
      {
        img: MobileApp,
        title: "Mobile App Development",
        badge: ["React Native ", "Flutter"],
      },
      {
        img: UIUX,
        title: "Product, UX & UI Design",
        badge: ["Research ", "Wireframe", "User Interface", "Prototyping", "Figma", "Figjam"],
      },
      {
        img: SupplyChain,
        title: "Supply Chain  & Logistics Management",
        badge: ["MERN Stack ", "Python", "Meteor Js", "Server less", "Ruby on Rails"],
      },
      {
        img: Cloud,
        title: "Cloud & DevOps",
        badge: ["AWS ", "Docker", "Kubernetes", "Teraform"],
      },
      {
        img: PRAService,
        title: "RPA Services",
        badge: ["Pupeeteer", "Selenium", "Scraping"],
      },
    ];
  return (
    <ExpertiseWrapper>
      <Container fluid>
        <Row>
          <Col lg={5} md={4} sm={12} xs={12} className="padding-0">
            <h1 className="color-primary mb-5 heading">Expertise to ace your next project</h1>
            <div className="pt-4">
              <Button text="Explore More" />
            </div>
          </Col>
          <Col lg={7} md={8} sm={12} xs={12} className="padding-0">
            {experties.map((list, index) => {
              return (
                <div className="d-flex skill-section align-items-center justify-content-between skill ">
                  <div className="d-flex add-gap">
                    <div>
                      <list.img />
                    </div>
                    <div className="">
                      <h4 className="title mb-10">{list.title}</h4>
                      <div className="badges-gap d-flex flex-wrap">
                        {list.badge.map((badge) => (
                          <span className="skill-badge">{badge}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="arrow-box">
                    <BsArrowRight />
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </ExpertiseWrapper>
  );
};
export default Index;
