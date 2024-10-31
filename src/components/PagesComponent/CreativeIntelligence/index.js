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
              
              <h2><span className="text-h4">Our Mantra </span>Creativity is Intelligence Having Fun. </h2>
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
