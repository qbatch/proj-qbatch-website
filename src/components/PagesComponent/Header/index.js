import React, { useState, } from "react";
import {Link} from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby'
import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container";
import Drawer from "../HeaderDrawer";
import { navigate } from 'gatsby';


import HeaderWrapper from "./style";
const headerMenu = [
  {
    name: "Services",
  },
  {
    name: "Industries",
    to: "#industries",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
  },
  {
    name: "Blog",
    to: "/blog",
  },
];

const Index = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
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
    <>
      <HeaderWrapper>
        <Container>
          <div className="header-main">
            <div className="logo">
              <Link to="/" className="d-none">
                <img src={Logo} alt="no-logo" />
              </Link>
              <Link to="/">
                <img src='/qbatch-logo.svg' alt="no-logo" />
              </Link>
            </div>
            <nav className="header-menu">
              <ul>
                {headerMenu.map((menu, ind) => (
                  <li key={ind}>
                    <Link to={menu.to} activeClassName="active">
                      <span onClick={menu.name === 'Services' ? () => setOpenDrawer(true) : ''}>{menu.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu-items">
              <Button onClick={() => navigate('/contact')} text="Contact Us" className="header-btn" />
              <div className="burger-icon" onClick={() => setOpenDrawer(true)}>
                {[1, 2, 3].map((key) => (
                  <span key={key}></span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </HeaderWrapper>
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  )
};

export default Index;
