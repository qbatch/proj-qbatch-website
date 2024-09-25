import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const BannerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  position: relative;
 
  .banner-bg {
    padding: 96px 0 340px;
    background-image: url('/portfolio-banner-bg.svg');
    background-repeat: no-repeat;
    background-position: 91%;
    max-width: 1600px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.whiteColor};
    ${media.xl`
      background-position: 88%;
    `}
    ${media.sm`
      background-image: none;
      padding: 80px 0 280px;
    `}
    ${media.mobile`
      padding: 40px 0 160px;
    `}
  }
  .banner-subheading {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    line-height: 32px;
  }
  .heading {
    max-width: 870px;
    margin-bottom: 32px;
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.whiteColor};
  }
  .paragraph {
    max-width: 830px;
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    line-height: 32px;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
  ${media.lg`
    padding: 56px 0;
  `}
`;

const CoverWrapper = styled.div`
   position: relative;
   .cover-img{
    margin-top: -244px;
    border-radius: 24px;
   }
   ${media.sm`
    & > div{
      padding: 0;
    }
  `}
  ${media.mobile`
    .cover-img{
      margin-top: -170px;
      border-radius: 8px;
    }
  `}
`;

export { BannerWrapper, CoverWrapper };
