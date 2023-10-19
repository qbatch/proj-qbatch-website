import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const IdeasWrapper = styled.div`
  background: url("/growing-bg.svg");
  background-size: cover;
  padding: 120px 203px 173px;
  ${media.md`
    padding: 96px 120px 120px;
  `}
  ${media.sm`
    padding: 96px 40px;
  `}
  ${media.xs`
    padding: 96px 20px;
  `}

  .heading {
    color: ${({ theme }) => theme.colors.whiteColor};
    max-width: 1038px;
    margin-bottom: 52px;
    text-transform: none;
    ${media.sm `
      margin-bottom: 32px;
    `}
  }
`;

export default IdeasWrapper;
