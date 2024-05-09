import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MvpTestedApprochWrapper = styled.div`
padding: 96px 0;
border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
${media.lg`
  padding: 56px 0;
`}
.heading{
  margin-bottom: 24px;
}
.paragraph{
  max-width: 692px;
  margin-bottom: 24px;
}
.inner-wrapper{
  display: flex;
  align-items: start;
  gap: 24px;
  padding-bottom: 32px;
  border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
  height: 100%;
  ${media.lg`
    margin-bottom: 32px;
    padding-bottom: 0;
  `}

  .inner-content{
    max-width: 572px;
    margin-top: 48px;
    ${media.lg`
    margin-top: 24px
    `}
  }
  .inner-paragraph{
    margin-bottom: 0;
  }
  .inner-icon{
    height: 48px;
    width: 48px;
    min-width: 48px;
    margin-top: 48px;
     ${media.lg`
    margin-top: 24px
    `}
  }
}
.row{
  div:last-child{
    .inner-wrapper{
      margin-bottom: 0;
    }
  }
}
`

export default MvpTestedApprochWrapper;