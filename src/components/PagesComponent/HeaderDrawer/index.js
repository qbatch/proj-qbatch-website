import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import { NavDropdown, Row, Col, Dropdown } from "react-bootstrap";

import Container from "../../UiComponent/Container";
import SocialIcons from "../../UiComponent/SocialIcons";
import { servicesItems } from "../../../constants";

import DrawerWrapper from "./style";

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
    to: "/about/",
  },
  {
    menu: "Careers",
    to: "/about/#freshteam-widget",
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
  const location = useLocation();

  const [activeState, setActiveState] = useState("services");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 991);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                    <Link to={data.to} className="dropdown-item" key={ind} onClick={()=> location.pathname === data.to && setOpenDrawer(false)}>
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
            <div className="nav-item">
            {isSmallScreen && <Link to="/blog" className="nav-link">Blog</Link>}
            </div>
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
                  <li><a href="/terms-and-conditions/">Terms & Conditions</a></li>
                  <li><a href="/privacy-policy/">Privacy Policy</a></li>
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
