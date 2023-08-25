import React from "react";
import { Col, Row } from "react-bootstrap";
import {Link} from 'gatsby'

import Container from "../../UiComponent/Container";
import PrimaryButton from '../../UiComponent/PrimaryButton';
import SocialIcons from "../../UiComponent/SocialIcons";

import FooterWrapper from "./style";

const contactData = [
  {
    title: "1309 Coffeen Avenue STE 1200 Sheridan,",
    icon: "/address-icon.svg",
  },
  {
    title: "Wyoming 82801, USA.",
    icon: "",
  },
  {
    title: "contact@qbatch.com",
    icon: "/mail-icon.svg",
  },
  {
    title: "+1 737-377-2428",
    icon: "/phone-icon.svg",
  },
];

const menuData = [
  {
    name: "Services",
    to: "/services",
  },
  {
    name: "Portfolio",
    to: "/",
  },
  {
    name: "Industry",
    to: "/",
  },
  {
    name: "Discover Phase",
    to: "/",
  },
];

const menu2Data = [
  {
    name: "About Us",
    to: "/about",
  },
  {
    name: "Contact Us",
    to: "/contact",
  },
  {
    name: "Qbatch Career",
    to: "/",
  },
];

const bottomMenu = [
  {
    name: "Subscribe to our Newsletter",
    to: "/",
  },
  {
    name: "Terms & Conditions",
    to: "/",
  },
  {
    name: "Privacy Policy",
    to: "/",
  },
];

const Index = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="footer-section">
          <Row>
            <Col md={2}>
              <div className="footer-menu">
                <ul>
                  {menuData.map((menu, ind) => (
                    <li key={ind}>
                      <Link to={menu.to}>{menu.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div className="footer-menu">
                <ul>
                  {menu2Data.map((menu, ind) => (
                    <li key={ind}>
                      <Link to={menu.to}>{menu.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer-contact">
                {contactData.map((data, ind) => (
                  <div key={ind}>
                    {data.icon && <img src={data.icon} alt="contact" />}
                    <span className={!data.icon && "address"}>{data.title}</span>
                  </div>
                ))}
              </div>
            </Col>
            <Col md={4}>
              <div className="footer-email">
                <h4>We’re excited to work together!</h4>
                <span>Need guidance on a revamp or a new project launch?</span>
                <div className="email-input">
                  <img src="/email-address-icon.svg" alt="email" />
                  <input type="email" placeholder="Email Address" />
                  <PrimaryButton color="#fff" borderBottom={true} text="Let’s Get Started" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="social-section d-flex align-items-center flex-wrap">
          <div className="d-flex align-items-center flex-wrap follow-section">
            <span className="follow-us">Follow Us at</span>
            <SocialIcons />
          </div>
          <div className="footer-menu footer-menu-bottom">
            <ul>
              {bottomMenu.map((menu, ind) => (
                <li key={ind} className="mb-0">
                  <Link to={menu.to}> {menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Index;
