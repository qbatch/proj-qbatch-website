import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "gatsby";

import { NavDropdown, Row, Col, Dropdown } from "react-bootstrap";

import Container from "../../UiComponent/Container";
import SocialIcons from "../../UiComponent/SocialIcons";

import DrawerWrapper from "./style";

const servicesItems = [
  {
    menu: 'Enterprise Software Development Solutions',
    to: '/services/enterprise-software-development',
  },
  {
    menu: 'E-commerce Automation Services',
    to: '/services/e-commerce-automation/',
  },
  {
    menu: 'Web App Development',
    to: '/services/web-app-development',
  },
  {
    menu: 'Mobile App Development',
    to: '/services/mobile-app-development',
  },
  {
    menu: 'CTO as a Service',
    to: '/services/cto-as-a-service',
  },
  {
    menu: 'Product Design & Development',
    to: '/services/product-design-development',
  },
  {
    menu: 'Web & data Scraping Services',
    to: '/services/web-and-data-scraping',
  },
  {
    menu: 'DevOps and Cloud Computing',
    to: '/events/ps-event',
  },
  {
    menu: 'Low-code/ No-code Platform Development',
    to: '',
  },
  {
    menu: 'UX/UI Design',
    to: '',
  },
]

const frameworksMenu = [
  {
    menu: "Node.js",
    to: "",
  },
  {
    menu: "MEAN/MERN",
    to: "",
  },
  {
    menu: "ROR",
    to: "",
  },
  {
    menu: "Django",
    to: "",
  },
  {
    menu: "React Native",
    to: "",
  },
  {
    menu: "Flutter",
    to: "",
  },
];

const frameworksMenu2 = [
  {
    menu: "Retool",
    to: "",
  },
  {
    menu: "JavaScript",
    to: "",
  },
  {
    menu: "Ruby",
    to: "",
  },
  {
    menu: "Python",
    to: "",
  },
];

const trendingMenu = [
  {
    menu: "Cloud and DevOps",
    to: "",
  },
  {
    menu: "Internet of Things",
    to: "",
  },
  {
    menu: "Big Data & Analytics",
    to: "",
  },
  {
    menu: "Data Science",
    to: "",
  },
  {
    menu: "AI/ML",
    to: "",
  },
  {
    menu: "RPA",
    to: "",
  },
];

const trendingMenu2 = [
  {
    menu: "Web3.0",
    to: "",
  },
  {
    menu: "Blockchain",
    to: "",
  },
  {
    menu: "AWS",
    to: "",
  },
  {
    menu: "Azure",
    to: "",
  },
  {
    menu: "GCP",
    to: "",
  },
];

const devOpsmenu = [
  {
    menu: "Chef",
    to: "",
  },
  {
    menu: "Teraform",
    to: "",
  },
  {
    menu: "Kubernetes",
    to: "",
  },
  {
    menu: "Docker",
    to: "",
  },
  {
    menu: "Jenkins",
    to: "",
  },
  {
    menu: "Ansible",
    to: "",
  },
  {
    menu: "CircleCI",
    to: "",
  },
];

const industriesMenu = [
  {
    menu: "E-commerce",
    to: "",
  },
  {
    menu: "Logistics and Supply Chain",
    to: "",
  },
  {
    menu: "FinTech",
    to: "",
  },
  {
    menu: "Healthcare",
    to: "",
  },
  {
    menu: "EdTech",
    to: "",
  },
  {
    menu: "Retail and Consumer Goods",
    to: "",
  },
  {
    menu: "Travel and Transportation",
    to: "",
  },
];

const howWeWorkMenu = [
  {
    menu: "Process",
    to: "",
  },
  {
    menu: "Discovery Phase",
    to: "",
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
    to: "",
  },
];

const dropdownData = [
  {
    title: "Services",
    state: "services",
    menu: servicesItems,
  },
  {
    title: "Hire Developers",
    state: "hireDevelopers",
    header: true,
    subMenu: [
      {
        heading: "Frameworks",
        menu1: frameworksMenu,
        menu2: frameworksMenu2,
      },
      {
        heading: "Trending",
        menu1: trendingMenu,
        menu2: trendingMenu2,
      },
      {
        heading: "DevOps",
        menu1: devOpsmenu,
        menu2: [],
      },
    ],
  },
  {
    title: "Industries",
    state: "industries",
    menu: industriesMenu,
  },
  {
    title: "How We Work",
    state: "howWeWork",
    menu: howWeWorkMenu,
  },
  {
    title: "Company",
    state: "company",
    menu: companyMenu,
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
            <img src="/drawer-cross.svg" alt="close" width="32px" height="32px" />
          </div>
          <div className="d-flex menu-main">
            {dropdownData.map((item, ind) => (
              <NavDropdown
                title={item.title}
                active={activeState === item.state}
                onClick={() => setActiveState(item.state)}
                show={activeState === item.state}
                onMouseEnter={() => setActiveState(item.state)}
                key={ind}
              >
                {!item.header ? (
                  item.menu.map((data, ind) => (
                    <Link to={data.to} className="dropdown-item" key={ind}>
                      {data.menu}
                    </Link>
                  ))
                ) : (
                  <div className="d-flex hire-developers-menu">
                    {item.subMenu.map((submenu, ind) => (
                      <div className={"d-flex inner-menu"}>
                        <div key={ind}>
                          <Dropdown.Header>{submenu.heading}</Dropdown.Header>
                          {submenu.menu1.map((data, ind) => (
                            <Link
                              to={data.to}
                              className="dropdown-item"
                              key={ind}
                            >
                              {data.menu}
                            </Link>
                          ))}
                        </div>
                        <div className="sub-menu2">
                          {submenu.menu2.map((data, ind) => (
                            <Link
                              to={data.to}
                              className="dropdown-item"
                              key={ind}
                            >
                              {data.menu}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </NavDropdown>
            ))}
          </div>
          <div className="bottom-content">
            <Row>
              <Col md={6}>
                <div className="drawer-email">
                  <span className="text-h3 d-block fw-bold mb-2">
                    We’re excited to work together!
                  </span>
                  <span>
                    Need guidance on a revamp or a new project launch?
                  </span>
                  <div className="email-input">
                    <input type="email" placeholder="Email Address" />
                    <div>
                      <img src="/drawer-arrow.svg" alt="arrow" width="28px" height="28px" />
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
