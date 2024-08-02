import React from 'react';
import {BannerWrapper, CoverWrapper} from './style';
import Container from '../../UiComponent/Container';
import { GatsbyImage } from "gatsby-plugin-image";

const projectBanner = ({ subHeading, mainHeading, detail, coverImage }) => {
  return (
    <>
    <BannerWrapper>
      <Container>
        <span>{subHeading} 🤝 Qbatch</span>
        <h1 className='text-h2 heading'>{mainHeading}</h1>
        <p className='paragraph'>{detail}</p>
      </Container>
    </BannerWrapper>
    <CoverWrapper>
      <Container>
       <img className='cover-img' src={coverImage} alt='cover'/>
      </Container>
    </CoverWrapper>
    </>
  );
};

export default projectBanner;