import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby'

import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container";
import Header2Wrapper from './style';

const Header2 = () => {
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
    `)
  const Logo = data.allStrapiHeader.nodes[0].logo.logo.localFile.url

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
          <div className='menu'>
            <ul>
              <li><Link to='/services'>Services</Link>
                <div className='mega-menu'>
                  <Container>
                    <ul>
                      <li><Link to="/services/enterprise-software-development/">Enterprise Software Development Solutions</Link></li>
                      <li><Link to="/services/e-commerce-automation/">E-commerce Automation Services</Link></li>
                      <li><Link to="/services/web-app-development/">Web App Development</Link></li>
                      <li><Link to="/services/mobile-app-development/">Mobile App Development</Link></li>
                      <li><Link to="/services/mvp-development/">MVP Development</Link></li>
                      <li><Link to="/services/cto-as-a-service/">CTO as a Service</Link></li>
                      <li><Link to="/services/product-design-development/">Product Design & Development</Link></li>
                      <li><Link to="/services/web-and-data-scraping/">Web & data Scraping Services</Link></li>
                      <li><Link to="/services/devops/">DevOps and Cloud Computing</Link></li>
                      <li><Link to="/services/browser-extension-development/">Browser Extension Development</Link></li>
                    </ul>
                  </Container>
                </div>
              </li>
              <li><Link to="/hire-developers">Hire Developers</Link>
                <div className='mega-menu'>
                  <Container>
                    <ul>
                      <li><Link to="/services/enterprise-software-development/">Enterprise Software Development Solutions</Link></li>
                      <li><Link to="/services/e-commerce-automation/">E-commerce Automation Services</Link></li>
                      <li><Link to="/services/web-app-development/">Web App Development</Link></li>
                      <li><Link to="/services/mobile-app-development/">Mobile App Development</Link></li>
                      <li><Link to="/services/mvp-development/">MVP Development</Link></li>
                      <li><Link to="/services/cto-as-a-service/">CTO as a Service</Link></li>
                      <li><Link to="/services/product-design-development/">Product Design & Development</Link></li>
                      <li><Link to="/services/web-and-data-scraping/">Web & data Scraping Services</Link></li>
                      <li><Link to="/services/devops/">DevOps and Cloud Computing</Link></li>
                      <li><Link to="/services/browser-extension-development/">Browser Extension Development</Link></li>
                    </ul>
                  </Container>
                </div>
              </li>
              <li>Industries</li>
              <li>Portfolio</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className='header-btn'>
            <Button onClick={() => navigate('/contact')} text="Contact Us" className="header-btn" />
          </div>
        </div>
      </Container>
    </Header2Wrapper>
  );
};

export default Header2;