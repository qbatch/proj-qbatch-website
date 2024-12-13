import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CollaborationNewWrapper = styled.div`
 padding: 96px 0;
 border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
 ${media.sm`
  padding: 40px 0;
`}
.section-heading {
  margin-bottom: 56px;
  ${media.sm`
    margin-bottom: 32px;
  `}
  h2 {
    white-space: pre-line;
    margin-bottom: 16px;
  }
  p {
    max-width: 490px;
    margin: 0 auto;
  }
}
.collaboration-col {
  ${media.md`
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
`}
}
.collaboration-box {
  box-shadow: 0px 0px 32px 0px #0000001A;
  margin-top: 36px;
  border-radius: 12px;
  padding: 80px 16px 24px;
  text-align: center;
  flex: 1;
  ${media.md`
    margin-top: 24px;
    padding-top: 24px !important;
  `}
  h3 {
    color: ${({ theme }) => theme.colors.midGray};
    margin-bottom: 16px;
  }
}
.equal-height-row {
    display: flex;
  }
  .equal-height-row > div {
    display: flex;
    flex-direction: column;
  }
  .equal-height-row > div > div {
    flex: 1;
  }
`

export default CollaborationNewWrapper;
