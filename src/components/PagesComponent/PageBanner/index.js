import React, { lazy } from "react";
import { navigate } from 'gatsby'
import { Row, Col } from "react-bootstrap";

const Container = lazy(() => import("../../UiComponent/Container"));
const Button = lazy(() => import("../../UiComponent/HomeButton"));
const Breadcrumb = lazy(() => import("../Breadcrumb"));

import CtoBannerWrapper from"./style";

const CtoBanner = ({isH1, heading, subheading, paragraph, buttonText, imgSrc, wrapperClass, blogInner, col1lg, col2lg, headingMaxWidth, className, mobileViewBanner, paragraphMaxWidth, subheadingColor, customCrumbs }) => {
  const defaultCol1lg = 7;
  const defaultCol2lg = 5;
  const defaultHomeCrumb = { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' };
  const crumbs = customCrumbs && customCrumbs.length > 0 ? [defaultHomeCrumb, ...customCrumbs] : [defaultHomeCrumb];

  return (
    <CtoBannerWrapper className={wrapperClass} blogInner={blogInner}>
      <Container className={className}>
        <Row>
          {customCrumbs && (
            <Breadcrumb crumbs={crumbs} />
          )}
          <Col lg={col1lg || defaultCol1lg} md={12} sm={12} xs={12}>
            <div className="banner-main">
              {subheading && <h1 className="banner-sub-heading text-h4" style={{ color: subheadingColor }}> {subheading}
              </h1>}
              {isH1 ? (
                <h1 className="text-h1" style={{ maxWidth: headingMaxWidth }}>
                  {heading}
                </h1>
              ) : (
                <h2 className="text-h1" style={{ maxWidth: headingMaxWidth }}>
                  {heading}
                </h2>
              )}
                <p style={{ maxWidth: paragraphMaxWidth }}>{paragraph}</p>
              <Button text={buttonText} onClick={() => navigate('/contact')} className="mx-lg-0" />
            </div>
          </Col>
          {imgSrc && (
            <Col lg={col2lg || defaultCol2lg} md={0} sm={0} xs={0} className="d-lg-flex d-none justify-content-end p-0">
              <img className="banner-img" src={imgSrc} alt="CTO Banner" title="banners" loading="lazy" />
            </Col>
          )}
        </Row>
      </Container>
    </CtoBannerWrapper>
  )
}

export default CtoBanner;
