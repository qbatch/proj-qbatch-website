import React, { lazy } from "react";

import BlogBannerWrapper from "./style";

const Container = lazy(() => import("../../UiComponent/Container"));
const Breadcrumb = lazy(() => import("../Breadcrumb"));

const index = ({ customCrumbs }) => {
  const defaultHomeCrumb = { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' };
  const crumbs = customCrumbs && customCrumbs.length > 0 ? [defaultHomeCrumb, ...customCrumbs] : [defaultHomeCrumb];
  return (
    <BlogBannerWrapper>
      <Container>
        <Breadcrumb crumbs={crumbs}/>
        <div className="blog-banner">
          <h1 className="text-h2">Powerful stories for leaders and learners</h1>
          <p className="text-h5">
            The world of technology is changing — read it, know it, and embrace
            it!
          </p>
        </div>
      </Container>
    </BlogBannerWrapper>
  );
};

export default index;
