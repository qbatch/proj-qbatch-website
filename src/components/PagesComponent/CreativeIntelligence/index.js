import React from "react";

import Container from "../../UiComponent/Container";
import AlbertSignatures from "../../../assets/images/albert-signatures.svg";
import QuoteIcon from "../../../assets/images/quotes.svg";

import CreativeIntelligenceWrapper from "./style";

const Index = () => {
  return (
    <CreativeIntelligenceWrapper>
      <Container>
        <div className="creative-content">
          <div className="d-flex creative-content-inn">
            <div className="creative-quote">
              <QuoteIcon />
            </div>
            <div className="creative-descriptiont">
              <h4>Our Mantra</h4>
              <h1>Creativity is Intelligence Having Fun. </h1>
            </div>
          </div>
          <div className="signatures">
            <AlbertSignatures />
          </div>
        </div>
      </Container>
    </CreativeIntelligenceWrapper>
  );
};
export default Index;
