import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MvpDevelopmentServiceWrapper = styled.div`
padding: 96px 0;
${media.lg`
  padding: 56px 0;
`}
.heading{
  text-transform: none;
}
.paragraph{
  margin-top:24px;
  text-align: center;
  ${media.md`
    text-align: left;
    margin-top: 16px;
  `}
}
.header{
  margin-bottom: 80px;
  ${media.lg`
  margin-bottom: 32px;
`}
}
.service-box{
  border:1px solid ${({ theme }) => theme.colors.dividerColor};
  border-radius: 24px 24px 0 24px;
  padding: 48px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  height: 100%;
  ${media.lg`
  padding: 32px;
`}
  .service-box-header{
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 28px;
    img{
      height: 60px;
      width: 60px;
    }
    h4{
      ${media.lg`
        line-height: 24px;
      `}
    }
  }
}
&.edu-commitment{
  .inner-paragraph{
    margin-bottom: 0;
  }
  .service-box{
    padding: 32px;
    ${media.md`
      padding: 16px 20px;
      .service-box-header{
        margin-bottom: 20px;
      }
    `}
  }
}
`

export default MvpDevelopmentServiceWrapper;
