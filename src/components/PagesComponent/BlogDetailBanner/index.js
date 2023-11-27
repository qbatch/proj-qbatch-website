import React from "react";
import Container from "../../UiComponent/Container";
import BlogDetailsWrapper from "./style";
import { navigate } from "gatsby";

const Index = () => {
  return (
    <BlogDetailsWrapper>
      <Container>
        <div className="breadcrumb">
          Home {">"} Blog {">"} Blog detail page
        </div>
        <h1 className="title d-flex gap-4">
          <img
            src="/back-arrow.svg"
            alt="no-arrow"
            className="pointer"
            onClick={() => navigate("/blog")}
          />
          Blog Title will come here
        </h1>
        <div className="d-flex gap-72">
          <div className="read-time">
            <img src="/clock.svg" alt="no-time" />5 Minutes Read
          </div>
          <div className="published-time">
            <span className="publish">Published on:</span>8 Hours ago
          </div>
        </div>
        <div className="chips">
          <span>Cybersecurity</span>
          <span>Software Development</span>
        </div>
        <div className="author-name">
          <span>Author Name Here</span>
        </div>
      </Container>
    </BlogDetailsWrapper>
  );
};

export default Index;
