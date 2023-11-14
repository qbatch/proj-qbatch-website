import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ScrollSliderWrapper = styled.div`
  padding: 120px 0;
  position: relative;
  ${media.sm`
    padding: 60px 0;
    `}
  .scroll-slider {
    padding-left: 96px;
  }
  .react-multi-carousel-track {
    gap: 24px;
  }
  .guidance-card {
    min-width: 453px;
    height: 360px;
    padding: 32px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-radius: 24px 24px 0;
    box-sizing: border-box;
    ${media.md`
      min-width: 100%;
      text-align: center;
    `}
    img {
      width: 64px;
      height: 64px;
    }
    h4 {
      margin: 24px 0 16px;
      white-space: pre-line;
      line-height: 32px;
      ${media.sm`
        margin: 24px 0 14px;
        white-space: wrap;
        line-height: 24px;
      `}
    }
    p {
      line-height: 32px;
    }
  }
  .progress-bar-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px; /* Adjust the height of your progress bar */
    background-color: #ccc; /* Set the background color of the progress bar */
  }

  .progress-bar {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export default ScrollSliderWrapper;
