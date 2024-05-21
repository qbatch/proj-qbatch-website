import React from "react";
import { Link } from 'gatsby'
import { navigate } from 'gatsby'
import { Row, Col } from "react-bootstrap";
import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/HomeButton";
import CtoBannerWrapper from "./style";

const CtoBanner = ({ heading, subheading, paragraph, buttonText, imgSrc, wrapperClass, blogInner, col1lg, col2lg, headingMaxWidth, className, mobileViewBanner, paragraphMaxWidth, subheadingColor, customCrumbs }) => {
  const defaultCol1lg = 7;
  const defaultCol2lg = 5;
  const defaultHomeCrumb = { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' };
  const crumbs = customCrumbs && customCrumbs.length > 0 ? [defaultHomeCrumb, ...customCrumbs] : [defaultHomeCrumb];

  return (
    <CtoBannerWrapper className={wrapperClass} blogInner={blogInner}>
      <Container className={className}>
        <Row>
          {customCrumbs && (
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
          )}
          <Col lg={col1lg || defaultCol1lg} md={12} sm={12} xs={12}>
            <div className="banner-main">
              {subheading && <h1 className="banner-sub-heading text-h4" style={{ color: subheadingColor }}> {subheading}
              </h1>}
              <h2 className="text-h1" style={{ maxWidth: headingMaxWidth }}>{heading}</h2>
              <p style={{ maxWidth: paragraphMaxWidth }}>{paragraph}</p>
              <Button text={buttonText} onClick={() => navigate('/contact')} className="mx-lg-0" />
            </div>
          </Col>
          {imgSrc && (
            <Col lg={col2lg || defaultCol2lg} md={0} sm={0} xs={0} className="d-lg-flex d-none justify-content-end p-0">
              <img className="banner-img" src={imgSrc} alt="CTO Banner" />
            </Col>
          )}
        </Row>
      </Container>
    </CtoBannerWrapper>
  )
}

export default CtoBanner;
