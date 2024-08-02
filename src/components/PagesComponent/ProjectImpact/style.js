import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProjectImpaceWrapper = styled.div`
padding: 96px 0;
.heading{
  margin: auto;
  margin-bottom: 72px;
  text-align: center;
}
.impact-image{
  border-radius: 16px;
}
${media.lg`
  padding: 56px 0;
`}
`

export default ProjectImpaceWrapper;