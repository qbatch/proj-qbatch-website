import React from "react";
import { Row, Col } from "react-bootstrap";

// import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container";

// import ArrowDownward from "../../../assets/images/arrow_downward.svg";

import ExpertiseWrapper from "./style";

const Index = () => {
  
  const experties = [
    {
      img: '/full-stack-development.svg',
      title: "Full Stack Web Development",
      badge: ["Chip/Label ", "Ruby On Rails", "Django"],
    },
    {
      img: '/mobile-development.svg',
      title: "Mobile App Development",
      badge: ["React Native ", "Flutter"],
    },
    {
      img: '/uiux-design.svg',
      title: "Product, UX & UI Design",
      badge: ["Research ", "Wireframe", "User Interface", "Prototyping", "Figma"],
    },
    {
      img: '/supply-chain.svg',
      title: "Supply Chain  & Logistics Management",
      badge: ["MERN Stack ", "Python", "Meteor Js", "Server less", "Ruby on Rails"],
    },
    {
      img: '/cloud-devop.svg',
      title: "Cloud & DevOps",
      badge: ["AWS ", "Docker", "Kubernetes", "Teraform"],
    },
    {
      img: '/rpa-service.svg',
      title: "RPA Services",
      badge: ["Pupeeteer", "Selenium", "Scraping"],
    },
  ];

  return (
    <ExpertiseWrapper>
      <Container>
        <div className="base-space">
          <Row>
            <Col lg={5} md={12} sm={12} xs={12}>
              <h2 className="color-primary heading text-h1">Expertise to ace your next project</h2>
              {/* <div className="pt-lg-4 pb-lg-0 pb-5">
                <Button text="Explore More" />
              </div> */}
            </Col>
            <Col lg={7} md={12} sm={12} xs={12}>
              {experties.map((list, i) => {
                return (
                  <div className="d-flex skill-section justify-content-between skill" key={i}>
                    <div className="d-flex add-gap w-100 align-items-center">
                      <img src={list.img} alt={list.title} loading="lazy" width={60} height={60} />
                      <div className="w-100">
                        <h3 className="title text-h4">{list.title}</h3>
                        <div className="badges-gap d-flex flex-wrap">
                          {list.badge.map((badge) => (
                            <span className="skill-badge" key={badge}>
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* <div className="box-arrow-wrapper">
                        <div className="arrow-box ms-auto">
                          <ArrowDownward />
                        </div>
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </Col>
          </Row>
        </div>
      </Container>
    </ExpertiseWrapper>
  );
};

export default Index;
