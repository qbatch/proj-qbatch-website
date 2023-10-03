import React from "react";
import { Link } from "gatsby";
import {Row,Col} from 'react-bootstrap'
import ListGroup from "react-bootstrap/ListGroup";
import PersonaWrapper from "./style";
import Container from "../../UiComponent/Container"
import ArrowDownward from "../../../assets/images/arrow_downward.svg";
import Divider from "../../UiComponent/Divider";

const Index = () => {
const persona = [
  {
    title: "Digital Business Leader/ Influencer/ Deep Thinker",
    list: [
      "Suitable for consumer-goods companies",
      "Pushes technology in the company’s digital strategies and budget.",
      "Holds decision-making authority for innovation-driven investments.",
      "Translates customer and market requirements into digital products and services.",
      "Deep understanding of technology trends, strategy, and execution. ",
      "Innovates enterprise architecture through R&D and budgeting.",
    ],
  },
  {
    title: "Business Enabler ",
    list: [
      "Prevents business units from becoming obsolete",
      "Facilitates responsive IT delivery mechanism via technical leadership.",
      "Governs and guides key technology adoption and investment decisions.",
      "Brainstorms and strategizes digital business platforms.",
      "Works with engineering teams to develop, enhance, and redesign products.",
      "Creates risk assessments when introducing new operational technology and ideas.",
    ],
  },
  {
    title: "IT Innovator/ Challenger/ Tech Visionary/ Change Agent",
    list: [
      "Key catalyzer of technology adoption and sustenance.",
      "Serves as the central point for technology innovation.",
      "Provides leadership to innovation managers and company-wide technology specialists.",
      "Heads IT engineering team and guides the impact of IT innovations.",
      "Promotes the adoption of agile and DevOps-oriented approach",
      "Introduces hybrid multi-cloud, edge computing, containerization, and automation.",
    ],
  },
  {
    title: "IT Chief Operating Officer/ Owners",
    list: [
      "Suitable for single or similar product companies.",
      "Heads the day-to-day agreed-upon delivery of IT services.",
      "Involved in IT purchasing and procurement decisions.",
      "Runs and maintains IT service management, vendor management, and compliance.",
      "Monitors and responds to incidents that might affect internal and external systems.",
      "Assures modernization, optimization, and consolidation of systems such as CRM or ERP.",
    ],
  },
];
  return (
    <>
      <PersonaWrapper>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="first-box">
                <h2 className="color-primary">Let’s Select The Most Fitting CTO Persona</h2>
                <p className="description">
                  As defined by{" "}
                  <Link target="blank" href="https://www.gartner.com/smarterwithgartner/understand-the-5-common-cto-personas">
                    {" "}
                    Gartner{" "}
                  </Link>
                  , we offer these 4 most comprehensive CTO leadership styles as per your needs and requirements.
                </p>
              </div>
            </Col>
            {persona.map((persona, index) => {
              return (
                <Col lg={4} md={6} sm={12}>
                  <div className="persona-box" key={index}>
                    <h4 className="color-primary">{persona.title}</h4>
                    <ul className="persona-list">
                      {persona.list.map((service, index) => (
                        <li data-icon="-" key={index}>
                          <span>
                            {" "}
                            <div className="hash">-</div> {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              );
            })}
            <Col lg={4} md={6} sm={12}>
              <div className="button-box">
                <h2 className="color-primary">Talk to our expert and get unbiased answers to your questions!</h2>
                <div className="find-cto">
                  <div className="box-center pt-lg-0 pt-4">
                    <div className="circle-bg">
                      <div className="circle-box">
                        <svg className="text-svg" viewBox="0 0 100 100" width="80" height="80">
                          <defs>
                            <circle id="myCircle" cx="0" cy="0" r="50" />
                            <path
                              id="circle"
                              rx="15"
                              d="M 50, 50
                        m -37, 0
                        a 37,37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0"
                            />
                          </defs>
                          <text>
                            <textPath href="#circle">
                              Can't Find your CTO Type? Can't Find your CTO Type? Can't Find your CTO Type?{" "}
                            </textPath>
                          </text>
                        </svg>
                        <ArrowDownward className="red-arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </PersonaWrapper>
      <Divider />
    </>
  );
};
export default Index;
