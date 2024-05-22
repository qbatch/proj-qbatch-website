import React from "react";
import { Link } from 'gatsby'

import Container from "../../UiComponent/Container";

import BlogBannerWrapper from "./style";

const index = ({ customCrumbs }) => {
  const defaultHomeCrumb = { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' };
  const crumbs = customCrumbs && customCrumbs.length > 0 ? [defaultHomeCrumb, ...customCrumbs] : [defaultHomeCrumb];
  return (
    <BlogBannerWrapper>
      <Container>
        <div className="breadcrumb-wrapper">
          <div className="breadcrumb">
            <ul className="d-flex gap-2 ps-0">
              {crumbs.map((crumb, index) => (
                <li key={index}>
                  <Link className="pointer" to={crumb.pathname}>
                    <span>{crumb.crumbLabel}</span>
                    {index < crumbs.length - 1 && <span className="ps-1">{crumb.crumbSeparator}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
