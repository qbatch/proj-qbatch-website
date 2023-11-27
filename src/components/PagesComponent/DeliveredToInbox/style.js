import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const InboxWrapper = styled.div`
  background: url("/inbox-bg.svg");
  background-size: cover;
  padding: 72px 0;
  text-align: center;
  border-radius: 24px 24px 0 24px;
  h2 {
    color: ${({ theme }) => theme.colors.dividerColor};
    max-width: 700px;
    line-height: 40px;
    letter-spacing: 0.7px;
    margin: 0 auto;
    margin-bottom: 48px;
    ${media.sm`
      line-height: 32px;
    `}
  }
  .subscribe-email {
    display: flex;
    gap: 12px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    padding: 16px;
    border-radius: 8px;
    max-width: 500px;
    margin: 0 auto;
    input {
      width: 100%;
      border: none;
      color: ${({ theme }) => theme.colors.textMedium};
      &::placeholder {
        color: ${({ theme }) => theme.colors.bodyLight};
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export default InboxWrapper;
