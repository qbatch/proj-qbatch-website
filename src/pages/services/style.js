import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const ResponsiveStyleWrapper = styled.div`
.enterprise-software {
  ${media.xs`
  img {
    width: 200px;
}
  `
  }
}
.explore-slider {
  ${media.xs`
  .title {
    text-align:center;
}
  `
  }
}


`;
export default ResponsiveStyleWrapper;