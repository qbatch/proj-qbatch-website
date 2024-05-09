import React from "react";
import { Link, navigate } from 'gatsby'
import {Row,Col} from 'react-bootstrap'
import ListGroup from "react-bootstrap/ListGroup";
import PersonaWrapper from "./style";
import Container from "../../UiComponent/Container"
import ArrowDownward from "../../../assets/images/arrow_downward.svg";
import Divider from "../../UiComponent/Divider";
import { personal } from "../../../constants";

const Index = () => {

  return (
    <>
      <PersonaWrapper>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="first-box">
                <h2 className="color-primary">What CTO Type is Right For Your Business?</h2>
                <p className="description">
                  As defined by{' '}
                  <Link
                    target="blank"
                    href="https://www.gartner.com/smarterwithgartner/understand-the-5-common-cto-personas"
                  >
                    {' '}
                    Gartner{' '}
                  </Link>
                  , we offer these 4 most comprehensive CTO leadership styles as per your needs and requirements.
                </p>
              </div>
            </Col>
            {personal?.map((personal, index) => {
              return (
                <Col lg={4} md={6} sm={12}>
                  <div className="personal-box" key={index}>
                    <h3 className="text-h4">{personal.title}</h3>
                    <ul className="personal-list">
                      {personal.list.map((service, index) => (
                        <li data-icon="-" key={index}>
                          <span>
                            {' '}
                            <div className="hash">-</div> {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              )
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
                              Can't Find Your CTO Type? Can't Find Your CTO Type? Can't Find Your CTO Type? 
                            </textPath>
                          </text>
                        </svg>
                        <ArrowDownward onClick={() => navigate('/contact')} className="red-arrow" />
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
  )
};
export default Index;
