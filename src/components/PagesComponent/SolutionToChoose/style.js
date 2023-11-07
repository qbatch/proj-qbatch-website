import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SolutionToChooseWrapper = styled.div`
  background: url("/solution-bg.svg");
  background-size: cover;
  padding: 120px 0;
  text-align: center;
  ${media.sm`
    padding: 60px 0;
  `}
  .solution-heading {
    max-width: 670px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 72px;
      ${media.sm`
        margin-bottom: 32px;
        `}
    }
  }
`;

export default SolutionToChooseWrapper;
