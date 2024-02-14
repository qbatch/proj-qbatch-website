import styled from "styled-components";
import { media } from "../../../../theme/media-mixins";

const PreviousEventsWrapper = styled.div`
padding: 96px 0;
.section-header{
  max-width: 860px;
  margin: auto;
  text-align: center;
  .heading{
    margin-bottom: 24px;
  }
  .paragraph{
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  }
}
.main-content{
  overflow: hidden;
  width: 100%;
}
.slide {
  transition: transform 0.3s ease, opacity 0.3s ease;
  img{
    height: 300px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    ${media.lg `
      height: 300px;
      padding: 0 32px;
    `}
    ${media.md `
      height: 350px;
    `}
    ${media.sm `
      height: 350px;
    `}
  }
}
.slick-track{
  padding: 100px 0;
}
.slick-slide{
  .slide{
    opacity: 0.6;
  }
  &.slick-center .slide {
    transform: scale(1.2); 
    z-index: 1; 
    position: relative;
    opacity: 1;
  }
}

`

export default PreviousEventsWrapper;