import React from "react";
import { Col, Row } from "react-bootstrap";

import Container from "../../UiComponent/Container";

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
    to: "/",
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
    name: "Company",
    to: "/",
  },
  {
    name: "Contact Us",
    to: "/",
  },
  {
    name: "Qbatch Career",
    to: "/",
  },
];

const socialIcons = [
  {
    img: "/facebook-icon.svg",
    className: "facebook-icon",
    to: "/",
  },
  {
    img: "/instagram-icon.svg",
    className: "insta-icon",
    to: "/",
  },
  {
    img: "/linkedin-icon.svg",
    className: "linkedin-icon",
    to: "/",
  },
  {
    img: "/twitter-icon.svg",
    className: "twitter-icon",
    to: "/",
  },
  {
    img: "/behance-icon.svg",
    className: "behance-icon",
    to: "/",
  },
  {
    img: "/youtube-icon.svg",
    className: "youtube-icon",
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
                    <li key={ind}>{menu.name}</li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div className="footer-menu">
                <ul>
                  {menu2Data.map((menu, ind) => (
                    <li key={ind}>{menu.name}</li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer-contact">
                {contactData.map((data, ind) => (
                  <div key={ind}>
                    <img src={data.icon} alt="contact" className={ind === 1 && "d-none"} />
                    <span className={ind === 1 && "address"}>{data.title}</span>
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
                  <div>
                    <span>Let’s Get Started</span>
                    <img src="/footer-right-arrow.svg" alt="arrow" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="social-section d-flex align-items-center justify-content-between flex-wrap">
          <div className="d-flex align-items-center flex-wrap follow-section">
            <span className="follow-us">Follow Us at</span>
            <div className="d-flex social-icons">
              {socialIcons.map((item, ind) => (
                <div className={item.className} key={ind}>
                  <img src={item.img} alt={item.className} />
                </div>
              ))}
            </div>
          </div>
          <div className="footer-menu footer-menu-bottom">
            <ul>
              {bottomMenu.map((menu, ind) => (
                <li key={ind} className="mb-0">
                  {menu.name}
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
