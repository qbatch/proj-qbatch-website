import React from "react";

import Container from "../../UiComponent/Container";

import BlogBannerWrapper from "./style";

const index = () => {
  return (
    <BlogBannerWrapper>
      <Container>
        <div className="blog-banner">
          <h1>Powerful stories for leaders and learners</h1>
          <h2 className="text-h3">
            The world of technology is changing — read it, know it, and embrace
            it!
          </h2>
        </div>
      </Container>
    </BlogBannerWrapper>
  );
};

export default index;
