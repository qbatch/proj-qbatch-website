import React from "react";
import { Link } from "gatsby";
import {Row,Col} from 'react-bootstrap'
import ListGroup from "react-bootstrap/ListGroup";
import PersonaWrapper from "./style";
import Container from "../../UiComponent/Container"
import ArrowDownward from "../../../assets/images/arrow_downward.svg";
import Divider from "../../UiComponent/Divider";
import {persona} from "../../../constants"

const Index = () => {
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
                              Can't Find your CTO Type? Can't Find your CTO Type? Can't Find your CTO Type?
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
