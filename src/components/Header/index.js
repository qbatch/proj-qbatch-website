import React from "react";
import HeaderWrapper from "./style";

// components
import Button from "../Button/index";

// images
import Logo from "../../images/qbatch-logo.svg";
import ArrowDown from "../../images/icons/arrow-down.svg";

// bootsrap
import { Container } from "react-bootstrap";

const Index = () => {
  
  return (
    <HeaderWrapper>
      <header className="header">
        <div className="header-main">
          <Logo />
          <nav className="header-menu">
            <ul>
              <li>
                Services <ArrowDown />
              </li>
              <li>
                Hire Developers <ArrowDown />
              </li>
              <li>
                Industries <ArrowDown />
              </li>
              <li>Portfolio</li>
            </ul>
          </nav>
          <div className="menu-items">
            <Button text="Contact" />
            <div className="burger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  );
};

export default Index;
