import React from "react";

import Container from "../../UiComponent/Container";
import { ecomLogos } from "../../../constants";

import LogoWrapper from "./style";

const Index = () => {
  return (
    <LogoWrapper>
      <Container>
        <div className="d-flex flex-wrap logos-main">
          {ecomLogos.map((logo, ind) => (
            <div className="ecom-logos">
              <img key={ind} src={logo} alt="logo" />
            </div>
          ))}
        </div>
      </Container>
    </LogoWrapper>
  );
};

export default Index;

