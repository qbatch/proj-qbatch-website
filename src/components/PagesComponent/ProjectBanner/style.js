import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const BannerWrapper = styled.div`
  padding: 96px 0 340px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-image: url('/portfolio-banner-bg.svg');
  background-repeat: no-repeat;
  background-position: 89%;
  color: ${({ theme }) => theme.colors.whiteColor};
  position: relative;
  ${media.sm`
    background-image: none;
  `}
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
   ${media.lg`
   .cover-img{
    margin-top: 0;
    border-radius: 0;
   }
   & > div{
    padding: 0;
   }
  `}
`;

export { BannerWrapper, CoverWrapper };
