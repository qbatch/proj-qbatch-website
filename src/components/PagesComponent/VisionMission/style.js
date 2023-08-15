import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const VisionWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  padding: 97px 0 96px;
  ${media.sm`
    padding: 40px 0;
  `}
.image-portion{
  img{
    border-radius: 32px 32px 0 32px;
    height: 390px;
    width: 100%;
    object-fit: cover;
    ${media.xs`
      height: 290px;
    `}
  }
}
.content-right{
  .content{
    padding-left: 25px;
    ${media.md`
     padding-left: 0;
    `}
  }
  .content-wrapper{
    justify-content: center;
    ${media.md`
     justify-content: start;
    `}
  }
}
.content-col{
  padding-top: 72px;
  &:first-child{
    padding-top: 0;
  }
}
.content-wrapper{
  height: 100%;
  display: flex;
  align-items: center;
  ${media.md`
    padding-bottom: 25px;
  `}
  .content{
    max-width: 573px;
    margin-bottom: 10px;
  }
  .content-heading{
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 14px;
  }
  .content-paragraph{
    line-height: 32px;
  }
}
`

export default VisionWrapper;
