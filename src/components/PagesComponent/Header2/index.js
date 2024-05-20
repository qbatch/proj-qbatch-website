import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { navigate } from 'gatsby';
import { Col, Row } from 'react-bootstrap';

import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container";
import Header2Wrapper from './style';

const Header2 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const data = useStaticQuery(graphql`
    query Header {
      allStrapiHeader {
        nodes {
          logo {
            logo {
              localFile {
                url
              }
            }
          }
        }
      }
    }
  `);

  const Logo = data.allStrapiHeader.nodes[0].logo.logo.localFile.url;

  const servicesMenu = [
    { label: "Enterprise Software Development", link: "/services/enterprise-software-development/" },
    { label: "E-commerce Automation Services", link: "/services/e-commerce-automation/" },
    { label: "Web App Development", link: "/services/web-app-development/" },
    { label: "Mobile App Development", link: "/services/mobile-app-development/" },
    { label: "MVP Development", link: "/services/mvp-development/" },
    { label: "CTO as a Service", link: "/services/cto-as-a-service/" },
    { label: "Product Design & Development", link: "/services/product-design-development/" },
    { label: "Web & data Scraping Services", link: "/services/web-and-data-scraping/" },
    { label: "DevOps and Cloud Computing", link: "/services/devops/" },
    { label: "Browser Extension Development", link: "/services/browser-extension-development/" }
  ];

  const hireDevelopersMenu = [
    {
      label: "Based on Tech Stack", subItems: [
        { label: "Ruby on Rails", link: "/" },
        { label: "JavaScript", link: "/" },
        { label: "Node.js", link: "/" },
        { label: "React Native", link: "/" },
        { label: "React", link: "/" },
        { label: "React.js", link: "/" },
        { label: "React/Node", link: "/" },
        { label: "Python", link: "/" },
        { label: "AWS", link: "/" },
        { label: "Amazon SP-API", link: "/" },
        { label: "Laravel", link: "/" },
        { label: "Go (Golang)", link: "/" }
      ]
    },
    {
      label: "Based on Role", subItems: [
        { label: "CTO-as-a-Service", link: "/" },
        { label: "Project Managers", link: "/" },
        { label: "Front-End", link: "/" },
        { label: "Product Designers", link: "/" },
        { label: "UI/UX designers", link: "/" },
        { label: "Back-End", link: "/" },
        { label: "QA engineers", link: "/" },
        { label: "Cloud", link: "/" },
        { label: "Full-Stack", link: "/" },
        { label: "Business Analysts", link: "/" },
        { label: "DevOps", link: "/" },
        { label: "Docker", link: "/" }
      ]
    },
    {
      label: "Based on Trending Technology", subItems: [
        { label: "Blockchain", link: "/" },
        { label: "CMS", link: "/" },
        { label: "Database", link: "/" },
        { label: "E-Commerce", link: "/" },
        { label: "AI & Robotics", link: "/" },
        { label: "EdTech", link: "/" },
        { label: "On-Demand", link: "/" },
        { label: "HealthTech", link: "/" },
        { label: "FinTech", link: "/" },
        { label: "Retail & Supply Chain", link: "/" }
      ]
    },
  ];

  const industriesMenu = [
    { label: "Logistics and Supply Chain", link: "/" },
    { label: "E-commerce", link: "/" },
    { label: "FinTech", link: "/" },
    { label: "Healthcare", link: "/" },
    { label: "EdTech", link: "/" },
    { label: "Travel and Transportation", link: "/" },
    { label: "Retail and Consumer Goods", link: "/" }
  ];

  const portfolioMenu = [
    { label: "Valued Clients", link: "/" },
    { label: "Tech stacks", link: "/" },
    { label: "Case studies", link: "/" }
  ];

  const howWeWorkMenu = [
    { label: "Process", link: "/" },
    { label: "Discovery Phase", link: "/" }
  ];

  const companyMenu = [
    { label: "About Us", link: "/" },
    { label: "Qbatch Careers", link: "/" },
    { label: "Events and PR", link: "/" }
  ];

  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isMainMenuOpen, setMainMenuOpen] = useState(false);
  const [isHireDevelopersMenuOpen, setHireDevelopersMenuOpen] = useState(false);
  const [isIndustriesMenuOpen, setIndustriesMenuOpen] = useState(false);
  const [isPortfolioMenuOpen, setPortfolioMenuOpen] = useState(false);
  const [isHowWeWorkMenuOpen, setHowWeWorkMenuOpen] = useState(false);
  const [isCompanyMenuOpen, setCompanyMenuOpen] = useState(false);

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
  };
  const toggleMainMenu = () => {
    setMainMenuOpen(!isMainMenuOpen);
  };

  const toggleHireDevelopersMenu = () => {
    setHireDevelopersMenuOpen(!isHireDevelopersMenuOpen);
  };

  const toggleIndustriesMenu = () => {
    setIndustriesMenuOpen(!isIndustriesMenuOpen);
  };

  const togglePortfolioMenu = () => {
    setPortfolioMenuOpen(!isPortfolioMenuOpen);
  };

  const toggleHowWeWorkMenu = () => {
    setHowWeWorkMenuOpen(!isHowWeWorkMenuOpen);
  };

  const toggleCompanyMenu = () => {
    setCompanyMenuOpen(!isCompanyMenuOpen);
  };

  return (
    <Header2Wrapper>
      <Container>
        <div className='header-wrapper'>
          <div className='header-logo'>
            <Link to="/" className="d-none">
              <img src={Logo} alt="no-logo" />
            </Link>
            <Link to="/">
              <img src='/qbatch-logo.svg' alt="no-logo" />
            </Link>
          </div>
          <div className={`menu ${isMainMenuOpen ? 'open' : 'close'}`}>
            <ul>
              <li>
                <div className={`link-wrapper ${isServicesMenuOpen ? 'open' : 'close'}`}>
                  <Link to='/services'>Services</Link><button onClick={toggleServicesMenu} className={isServicesMenuOpen ? 'open' : 'close'}><img src='/mega-menu-arrow.svg' /></button>
                </div>
                <div className={`mega-menu ${isServicesMenuOpen ? 'open' : 'close'}`}>
                  <Container>
                    <ul>
                      {servicesMenu.map((item, index) => (
                        <li key={index}>
                          <Link to={item.link} onClick={item.link === "/" ? (e) => e.preventDefault() : undefined}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </Container>
                </div>
              </li>
              <li>
                <div className={`link-wrapper ${isHireDevelopersMenuOpen ? 'open' : 'close'}`}>
                  <Link to="/hire-developers">Hire Developers </Link>
                  <button onClick={toggleHireDevelopersMenu} className={isHireDevelopersMenuOpen ? 'open' : 'close'}><img src='/mega-menu-arrow.svg' /></button>
                </div>
                <div className={`mega-menu multi-menu ${isHireDevelopersMenuOpen ? 'open' : 'close'}`}>
                  <Container>
                    <Row className='g-lg-5'>
                      {hireDevelopersMenu.map((category, index) => (
                        <Col lg={4} className='menu-col' key={index}>
                          <span className='menu-heading'>{category.label}</span>
                          <ul>
                            {category.subItems.map((item, idx) => (
                              <li key={idx}>
                                <Link to={item.link} onClick={item.link === "/" ? (e) => e.preventDefault() : undefined}>{item.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </Col>
                      ))}
                    </Row>
                  </Container>
                </div>
              </li>
              <li>
                <div className={`link-wrapper ${isIndustriesMenuOpen ? 'open' : 'close'}`}>
                  <Link to="/">Industries</Link>
                  <button onClick={toggleIndustriesMenu} className={isIndustriesMenuOpen ? 'open' : 'close'}><img src='/mega-menu-arrow.svg' /></button>
                </div>
                <div className={`mega-menu ${isIndustriesMenuOpen ? 'open' : 'close'}`}>
                  <Container>
                    <ul>
                      {industriesMenu.map((item, index) => (
                        <li key={index}>
                          <Link to={item.link} onClick={item.link === "/" ? (e) => e.preventDefault() : undefined}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </Container>
                </div>
              </li>
              <li>
                <div className={`link-wrapper ${isPortfolioMenuOpen ? 'open' : 'close'}`}>
                  <Link to="/">Portfolio</Link>
                  <button onClick={togglePortfolioMenu} className={isPortfolioMenuOpen ? 'open' : 'close'}><img src='/mega-menu-arrow.svg' /></button>
                </div>
                <div className={`mega-menu ${isPortfolioMenuOpen ? 'open' : 'close'}`}>
                  <Container>
                    <ul>
                      {portfolioMenu.map((item, index) => (
                        <li key={index}>
                          <Link to={item.link} onClick={item.link === "/" ? (e) => e.preventDefault() : undefined}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </Container>
                </div>
              </li>
              <li>
                <div className={`link-wrapper ${isHowWeWorkMenuOpen ? 'open' : 'close'}`}>
                  <Link to="/">How we Work</Link>
                  <button onClick={toggleHowWeWorkMenu} className={isHowWeWorkMenuOpen ? 'open' : 'close'}><img src='/mega-menu-arrow.svg' /></button>
                </div>
                <div className={`mega-menu ${isHowWeWorkMenuOpen ? 'open' : 'close'}`}>
                  <Container>
                    <ul>
                      {howWeWorkMenu.map((item, index) => (
                        <li key={index}>
                          <Link to={item.link} onClick={item.link === "/" ? (e) => e.preventDefault() : undefined}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </Container>
                </div>
              </li>
              <li>
                <div className={`link-wrapper ${isCompanyMenuOpen ? 'open' : 'close'}`}>
                  <Link to="/">Company</Link>
                  <button onClick={toggleCompanyMenu} className={isCompanyMenuOpen ? 'open' : 'close'}><img src='/mega-menu-arrow.svg' /></button>
                </div>
                <div className={`mega-menu ${isCompanyMenuOpen ? 'open' : 'close'}`}>
                  <Container>
                    <ul>
                      {companyMenu.map((item, index) => (
                        <li key={index}>
                          <Link to={item.link} onClick={item.link === "/" ? (e) => e.preventDefault() : undefined}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </Container>
                </div>
              </li>
              <li>
                <div className="link-wrapper">
                  <Link to="/blog">Blog</Link>
                </div>
              </li>
            </ul>
          </div>
          <div className='header-btn'>
            <Button onClick={() => navigate('/contact')} text="Contact Us" className="header-btn" />
            <div onClick={toggleMainMenu} className="burger-icon">
              {[1, 2, 3].map((key) => (
                <span key={key}></span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Header2Wrapper>
  );

};

export default Header2;