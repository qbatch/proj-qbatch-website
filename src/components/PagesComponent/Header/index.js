import React from "react";
import HeaderWrapper from "./style";

// components
import Button from "../../UiComponent/Button";
import Divider from "../../UiComponent/Divider";

// images
import Logo from "../../../assets/images/qbatch-logo.svg";
import ArrowDown from "../../../assets/images/icons/arrow-down.svg";

// bootsrap
import { Container, Navbar, Nav } from "react-bootstrap";

const Index = () => {

  return (
    <HeaderWrapper>
      <Navbar expand="lg" sticky="top" bg="#fff">
        <Container fluid className="p-0">
          <Navbar.Brand href="#">
            <Logo />
          </Navbar.Brand>
          <nav className="header-menu">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                Services <ArrowDown />
              </Nav.Link>
              <Nav.Link href="#features">
                Hire Developers <ArrowDown />
              </Nav.Link>
              <Nav.Link href="#pricing">
                Industries <ArrowDown />
              </Nav.Link>
              <Nav.Link href="#pricing">
                Portfolio <ArrowDown />
              </Nav.Link>
            </Nav>
          </nav>
          <div className="menu-items">
            <Button text="Contact" />
            <div className="burger-icon">
              {[1, 2, 3].map(() => (
                <span></span>
              ))}
            </div>
          </div>
        </Container>
      </Navbar>
      <Divider />
    </HeaderWrapper>
  );
};

export default Index;
