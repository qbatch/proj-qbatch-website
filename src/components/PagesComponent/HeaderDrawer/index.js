import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import {Link} from 'gatsby'

import { NavDropdown, Row, Col, Dropdown } from "react-bootstrap";

import Container from "../../UiComponent/Container";
import SocialIcons from "../../UiComponent/SocialIcons"

import DrawerWrapper from "./style";

const servicesItems = [
  {
    menu: "Enterprise Software Development Solutions",
    to: "/",
  },
  {
    menu: "Web and Mobile App Development",
    to: "/",
  },
  {
    menu: "E-commerce Automation Services",
    to: "/",
  },
  {
    menu: "CTO as a Service",
    to: "/",
  },
  {
    menu: "Product Design & Development",
    to: "/",
  },
  {
    menu: "MVP Development",
    to: "/",
  },
  {
    menu: "DevOps and Cloud Computing",
    to: "/",
  },
  {
    menu: "Low-code/ No-code Platform Development",
    to: "/",
  },
  {
    menu: "UX/UI Design",
    to: "/",
  },
];

const frameworksMenu = [
  {
    menu: "Node.js",
    to: "/",
  },
  {
    menu: "MEAN/MERN",
    to: "/",
  },
  {
    menu: "ROR",
    to: "/",
  },
  {
    menu: "Django",
    to: "/",
  },
  {
    menu: "React Native",
    to: "/",
  },
  {
    menu: "Flutter",
    to: "/",
  },
];

const frameworksMenu2 = [
  {
    menu: "Retool",
    to: "/",
  },
  {
    menu: "JavaScript",
    to: "/",
  },
  {
    menu: "Ruby",
    to: "/",
  },
  {
    menu: "Python",
    to: "/",
  },
];

const trendingMenu = [
  {
    menu: "Cloud and DevOps",
    to: "/",
  },
  {
    menu: "Internet of Things",
    to: "/",
  },
  {
    menu: "Big Data & Analytics",
    to: "/",
  },
  {
    menu: "Data Science",
    to: "/",
  },
  {
    menu: "AI/ML",
    to: "/",
  },
  {
    menu: "RPA",
    to: "/",
  },
];

const trendingMenu2 = [
  {
    menu: "Web3.0",
    to: "/",
  },
  {
    menu: "Blockchain",
    to: "/",
  },
  {
    menu: "AWS",
    to: "/",
  },
  {
    menu: "Azure",
    to: "/",
  },
  {
    menu: "GCP",
    to: "/",
  },
];

const devOpsmenu = [
  {
    menu: "Chef",
    to: "/",
  },
  {
    menu: "Teraform",
    to: "/",
  },
  {
    menu: "Kubernetes",
    to: "/",
  },
  {
    menu: "Docker",
    to: "/",
  },
  {
    menu: "Jenkins",
    to: "/",
  },
  {
    menu: "Ansible",
    to: "/",
  },
  {
    menu: "CircleCI",
    to: "/",
  },
];

const industriesMenu = [
  {
    menu: "E-commerce",
    to: "/",
  },
  {
    menu: "Logistics and Supply Chain",
    to: "/",
  },
  {
    menu: "FinTech",
    to: "/",
  },
  {
    menu: "Healthcare",
    to: "/",
  },
  {
    menu: "EdTech",
    to: "/",
  },
  {
    menu: "Retail and Consumer Goods",
    to: "/",
  },
  {
    menu: "Travel and Transportation",
    to: "/",
  },
];

const howWeWorkMenu = [
  {
    menu: "Process",
    to: "/",
  },
  {
    menu: "Discovery Phase",
    to: "/",
  },
];

const companyMenu = [
  {
    menu: "About Us",
    to: "/about",
  },
  {
    menu: "Careers",
    to: "",
  },
  {
    menu: "Events & PR",
    to: "/",
  },
];

const Index = (props) => {
  const { openDrawer, setOpenDrawer } = props;

  const [activeState, setActiveState] = useState("services");

  return (
    <Drawer
      open={openDrawer}
      size="100%"
      direction="right"
      className="header-drawer"
    >
      <DrawerWrapper>
        <Container>
          <div className="cross-icon" onClick={() => setOpenDrawer(false)}>
            <img src="/drawer-cross.svg" alt="close" />
          </div>
          <div className="d-flex menu-main">
            <NavDropdown
              title="Services"
              active={activeState === "services"}
              onClick={() => setActiveState("services")}
              show={activeState === "services"}
            >
            {servicesItems.map((data, ind) => <Dropdown.Item key={ind}><Link to={data.to}>{data.menu}</Link></Dropdown.Item>)}
            </NavDropdown>
            <NavDropdown
              title="Hire Developers"
              active={activeState === "hireDevelopers"}
              onClick={() => setActiveState("hireDevelopers")}
              show={activeState === "hireDevelopers"}
            >
              <div className="d-flex hire-developers-menu">
                <div className="d-flex inner-menu">
                  <div>
                    <Dropdown.Header>Frameworks</Dropdown.Header>
                      {frameworksMenu.map((data, ind) => <Dropdown.Item key={ind}><Link to={data.to}>{data.menu}</Link></Dropdown.Item>)}
                  </div>
                  <div className="sub-menu2">
                    {frameworksMenu2.map((data, ind) => <Dropdown.Item key={ind}><Link to={data.to}>{data.menu}</Link></Dropdown.Item>)}
                  </div>
                </div>
                <div className="d-flex inner-menu">
                  <div>
                    <Dropdown.Header>Trending</Dropdown.Header>
                        {trendingMenu.map((data, ind) => <Dropdown.Item key={ind}><Link to={data.to}>{data.menu}</Link></Dropdown.Item>)}
                  </div>
                  <div className="sub-menu2">
                    {trendingMenu2.map((data, ind) => <Dropdown.Item key={ind}><Link to={data.to}>{data.menu}</Link></Dropdown.Item>)}
                  </div>
                </div>
                <div>
                  <Dropdown.Header>DevOps</Dropdown.Header>
                  {devOpsmenu.map((data, ind) => ( <Dropdown.Item key={ind}><Link to={data.to}>{data.menu}</Link></Dropdown.Item> ))}
                </div>
              </div>
            </NavDropdown>
            <NavDropdown
              title="Industries"
              active={activeState === "industries"}
              onClick={() => setActiveState("industries")}
              show={activeState === "industries"}
            >
              {industriesMenu.map((data, ind) => ( <Dropdown.Item key={ind}><Link to={data.to}>{data.menu}</Link></Dropdown.Item> ))}
            </NavDropdown>
            <NavDropdown
              title="How We Work"
              active={activeState === "howWeWork"}
              onClick={() => setActiveState("howWeWork")}
              show={activeState === "howWeWork"}
            >
              {howWeWorkMenu.map((data, ind) => <Dropdown.Item key={ind}><Link to={data.to}>{data.menu}</Link></Dropdown.Item>)}
            </NavDropdown>
            <NavDropdown
              title="Company"
              active={activeState === "company"}
              onClick={() => setActiveState("company")}
              show={activeState === "company"}
            >
              {companyMenu.map((data, ind) => <Dropdown.Item key={ind}><Link to={data.to}>{data.menu}</Link></Dropdown.Item>)}
            </NavDropdown>
          </div>
          <div className="bottom-content">
            <Row>
              <Col md={6}>
                <div className="drawer-email">
                  <h3>We’re excited to work together!</h3>
                  <span>
                    Need guidance on a revamp or a new project launch?
                  </span>
                  <div className="email-input">
                    <input type="email" placeholder="Email Address" />
                    <div>
                      <img src="/drawer-arrow.svg" alt="arrow" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <ul className="bottom-menu">
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </Col>
              <Col md={3}>
                <div className="social-section">
                  <span className="follow-us">Follow Us at:</span>
                  <SocialIcons />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </DrawerWrapper>
    </Drawer>
  );
};

export default Index;
