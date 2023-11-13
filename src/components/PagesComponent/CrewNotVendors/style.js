import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CrewWrapper = styled.div`
  background: url("/solution-bg.svg");
  background-size: cover;
  padding: 120px 0;
  text-align: center;
  ${media.sm`
    padding: 60px 0;
  `}
  .crew-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: ${({ theme }) => theme.colors.bodyLight};
      margin-bottom: 0;
      letter-spacing: 0.7px;
      span {
        &:first-child {
          color: ${({ theme }) => theme.colors.whiteColor};
        }
        &:nth-child(2) {
          color: ${({ theme }) => theme.colors.dividerColor};
        }
      }
    }
  }
`;

export default CrewWrapper;
