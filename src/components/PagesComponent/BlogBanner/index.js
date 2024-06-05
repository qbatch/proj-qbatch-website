import React from "react";

import Container from "../../UiComponent/Container";

import BlogBannerWrapper from "./style";
import Breadcrumb from "../Breadcrumb";

const index = ({ customCrumbs }) => {
  const defaultHomeCrumb = { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' };
  const crumbs = customCrumbs && customCrumbs.length > 0 ? [defaultHomeCrumb, ...customCrumbs] : [defaultHomeCrumb];
  return (
    <BlogBannerWrapper>
      <Container>
        <Breadcrumb crumbs={crumbs}/>
        <div className="blog-banner">
          <h1 className="text-h2">Powerful stories for leaders and learners</h1>
          <h2 className="text-h5">
            The world of technology is changing — read it, know it, and embrace
            it!
          </h2>
        </div>
      </Container>
    </BlogBannerWrapper>
  );
};

export default index;
