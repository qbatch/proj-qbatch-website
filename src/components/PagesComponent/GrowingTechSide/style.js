import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const GrowingTechWrapper = styled.div`
  background: url("/growing-bg.svg");
  background-size: cover;
  background-position: right;
  padding:98px 203px;
  ${media.md`
    padding: 96px 120px 120px;
  `}
  ${media.sm`
    padding: 56px 24px;
  `}

  h2 {
    color: ${({ theme }) => theme.colors.whiteColor};
    max-width: 900px;
    margin-bottom: 52px;
    ${media.sm `
      margin-bottom: 32px;
    `}
  }
`;

export default GrowingTechWrapper;
