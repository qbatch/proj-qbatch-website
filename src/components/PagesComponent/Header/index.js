import React, { useState } from "react";

import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container";
import Drawer from "../HeaderDrawer";
// import { navigate } from 'gatsby';

import Logo from "../../../assets/images/qbatch-logo.svg";

import HeaderWrapper from "./style";

const headerMenu = [
  {
    name: "Services",
    to: "/",
  },
  {
    name: "Hire Developers",
    to: "/",
  },
  {
    name: "Industries",
    to: "/",
  },
  {
    name: "Portfolio",
    to: "/",
  },
  {
    name: "Blog",
    to: "/",
  },
];

const Index = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  // const handleNavigate = () => {
  //   navigate('/contact');
  // };
  return (
    <>
      <HeaderWrapper>
        <Container>
          <div className="header-main">
            <div className="logo">
              <Logo />
            </div>
            <nav className="header-menu">
              <ul>
                {headerMenu.map((menu, ind) => (
                  <li key={ind}>
                    <span>{menu.name}</span>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu-items">
                {/* <Button onClick={()=> navigate('/contact')} text="Contact Us" className="header-btn" /> */}
                <Button text="Contact Us" className="header-btn" />
             
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
  );
};

export default Index;
