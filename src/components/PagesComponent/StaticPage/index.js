import React from "react";

import Container from "../../UiComponent/Container";

import StaticPageWrapper from "./style";

const Index = ({ data }) => {

  return (
      <StaticPageWrapper>
        <Container>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.content,
            }}
          />
        </Container>
      </StaticPageWrapper>
  );
};

export default Index;
