import React, { lazy } from 'react';
import { useLocation } from '@reach/router';

import Container from '../../UiComponent/Container';
const Breadcrumb = lazy(() => import("../Breadcrumb"));

import { BannerWrapper, CoverWrapper } from './style';

const projectBanner = ({ subHeading, mainHeading, detail, coverImage }) => {
  const location = useLocation();

  return (
    <>
      <BannerWrapper>
        <div className='banner-bg'>
          <Breadcrumb crumbs={[
            { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' },
            { pathname: '/portfolio/', crumbLabel: 'Portfolio', crumbSeparator: '>' },
            { pathname: location.pathname, crumbLabel: subHeading },
          ]} />
          <Container>
            <span className='banner-subheading'>{subHeading} 🤝 Qbatch</span>
            <h1 className='text-h2 heading'>{mainHeading}</h1>
            <p className='paragraph'>{detail}</p>
          </Container>
        </div>
      </BannerWrapper>
      <CoverWrapper>
        <Container>
          <img className='cover-img' src={coverImage} alt='cover' />
        </Container>
      </CoverWrapper>
    </>
  );
};

export default projectBanner;
