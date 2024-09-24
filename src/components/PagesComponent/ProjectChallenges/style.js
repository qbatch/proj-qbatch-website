import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProjectChallengesWrapper = styled.div`
padding: 96px 0;
background-color: ${({ theme }) => theme.colors.secondaryColor};
${media.sm`
  padding: 56px 0;
`}
.inner-wrapper{
  display: flex;
  flex-direction: column;
  gap: 120px;
}
.heading{
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.whiteColor};
}
.paragraph{
  margin-bottom: 72px;
  color: ${({ theme }) => theme.colors.whiteColor};
}
.inner-box {
  border-bottom: 4px solid; 
  border-image-source: linear-gradient(90deg, #ED1C24 0%, #0054A6 100%);
  border-image-slice: 1;
  height: 100%;
}
.inner-heading{
  color: ${({ theme }) => theme.colors.whiteColor};
  margin-bottom: 16px;
  max-width: 210px;
  &.text-width {
    max-width: 250px;
  }
  ${media.sm`
    max-width: 100%;
  `}
}
.inner-paragraph{
  color: ${({ theme }) => theme.colors.whiteColor};
  margin-bottom: 36px;
}
${media.lg`
  .inner-wrapper{
    gap: 56px;
  }
  .paragraph{
    margin-bottom: 24px;
  }
  .inner-paragraph{
    margin-bottom: 18px;
  }
`}
`

export default ProjectChallengesWrapper;
