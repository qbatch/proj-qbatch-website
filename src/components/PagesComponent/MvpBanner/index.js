import React from 'react';
import { Link, navigate } from 'gatsby'
import { Row, Col } from "react-bootstrap";

import Container from '../../UiComponent/Container';
import Button from "../../UiComponent/HomeButton";

import MvpBannerWrapper from './style';
import Breadcrumb from '../Breadcrumb';

const MvpBanner = ({ heading, subheading, paragraph, buttonText, imgSrc, wrapperClass, blogInner, col1lg, col2lg, headingMaxWidth, className, mobileViewBanner, paragraphMaxWidth, subheadingColor, customCrumbs }) => {
  const defaultCol1lg = 7;
  const defaultCol2lg = 5;
  const defaultHomeCrumb = { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' };
  const crumbs = customCrumbs && customCrumbs.length > 0 ? [defaultHomeCrumb, ...customCrumbs] : [defaultHomeCrumb];
  return (
    <MvpBannerWrapper className={wrapperClass} blogInner={blogInner}>
      <Container className={className}>
        <Row className='align-items-center h-100 w-100'>
          <Col lg={col1lg || defaultCol1lg} md={12} sm={12} xs={12}>

            {customCrumbs && (
              <Breadcrumb crumbs={crumbs} />
            )}
            <div className="banner-main">
              <h1 className="banner-sub-heading text-h4" style={{ color: subheadingColor }}> {subheading}
              </h1>
              <h2 className="text-h2 heading" style={{ maxWidth: headingMaxWidth }}>{heading}</h2>
              <p style={{ maxWidth: paragraphMaxWidth }}>{paragraph}</p>
              <Button text={buttonText} onClick={() => navigate('/contact')} className="mx-lg-0 mx-auto" />
            </div>
          </Col>
          <Col lg={col2lg || defaultCol2lg} className="d-flex justify-content-center p-0 pt-lg-0 pt-4">
            <div className='banner-list'>
              <div className='list-item'>
                <div className='img-wrapper'>
                  <img className='one' src='/1.svg' />
                </div>
                <p className='inner-paragraph'>We work on your must-have MVP features prioritizing quality, speed, and budget.</p>
              </div>
              <div className='list-item'>
                <div className='img-wrapper'>
                  <img src='/2.svg' />
                </div>
                <p className='inner-paragraph'>Our 8+ years of experience helps us decide what to build first and what to build later.</p>
              </div>
              <div className='list-item'>
                <div className='img-wrapper'>
                  <img src='/3.svg' />
                </div>
                <p className='inner-paragraph'>We don’t take your trust for granted. We stay longer to help you succeed today and forever.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MvpBannerWrapper>
  );
};

export default MvpBanner;
