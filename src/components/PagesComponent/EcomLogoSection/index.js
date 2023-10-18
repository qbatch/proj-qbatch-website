import React from "react";

import Container from "../../UiComponent/Container";
import { ecomLogos } from "../../../constants";

import EcomLogoWrapper from "./style";

const Index = () => {
  return (
    <EcomLogoWrapper>
      <Container>
        <div className="d-flex flex-wrap logos-main">
          {ecomLogos.map((logo, ind) => (
            <div className="ecom-logos">
              <img key={ind} src={logo} alt="logo" />
            </div>
          ))}
        </div>
      </Container>
    </EcomLogoWrapper>
  );
};

export default Index;

