import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const StartProjectWrapper = styled.div`
  padding: 97px 0 95px;
  ${media.sm`
      padding: 40px 0;
    `}
  h2 {
    margin: 1px 0 29px -1px;
  }
  .mt-40 {
    margin-top: 40px;
  }
  .seperation {
    color: ${({ theme }) => theme.colors.bodyLight};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  }
  .project-form {
    margin-top: 20px;
  }
  .testimonials {
    padding-top: 138px;
    .testimonial-heading {
      margin-bottom: 29px;
    }
    .testimonial-paragraph{
      margin-bottom: 35px;
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
