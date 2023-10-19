import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const StartProjectWrapper = styled.div`
  padding: 120px 0;
  ${media.sm`
      padding: 40px 0;
    `}
  h2 {
    margin: 1px 0 29px -1px;
    text-transform: inherit;
  }
  .subtitle{
    letter-spacing: 0.19px;
  }
  .mt-40 {
    margin-top: 40px;
  }
  .seperation {
    color: ${({ theme }) => theme.colors.bodyLight};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  }
  .project-form {
    margin-top: 38px;
    &:has(.show) {
    .collpase-select {
      .title {
        color: ${({ theme }) => theme.colors.bodyLight};
      }
    }
  }

  .collpase-select{
      margin-top: 24px;
    }
    .collpase-content{
      margin-top: 0;
    }
    .title{
    font-weight:400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.14px;
    }
  }
  .testimonials {
    padding-top: 168px;
    ${media.sm`
      padding-top: 40px;
    `}
    .testimonial-heading {
      margin-bottom: 29px;
    }
    .testimonial-paragraph{
      margin-bottom: 24px;
      font-size: 24px;
      font-weight: 300;
      letter-spacing: 0.7px;
      line-height: 32px;
      max-width: 545px;
    }
  }
  .video-box {
    margin-top: 37px;
    .video-react-control-bar {
      border-top-left-radius: 18px;
      border-top-right-radius: 18px;
    }
    .video-react {
      border-radius: 18px;
    }
  }
  .zero-height {
    height: 0;
    transition: height 1s ease-out;
    opacity: 0;
    visibility: hidden;
  }
  .add-height {
    height: auto;
    opacity: 1;
    visibility: visible;
    transition: 1s all ease-in;
  }
  .collapse-radio {
    margin-bottom: 11px
  }
`;
export default StartProjectWrapper;
