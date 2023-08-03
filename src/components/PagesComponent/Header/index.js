import React from "react";

import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container";

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

  return (
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
            <Button text="Contact Us" className="header-btn" />
            <div className="burger-icon">
              {[1, 2, 3].map((key) => (
                <span key={key}></span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Index;
