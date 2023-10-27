import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const WebappBanenrWrapper = styled.div`
.banner-headings{
  .main-heading{
    max-width: 931px;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
}
`;
export default WebappBanenrWrapper;

