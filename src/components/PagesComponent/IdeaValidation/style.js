import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const IdeaValidtionWrapper = styled.div`
padding: 96px 0;
border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
${media.lg`
  padding: 56px 0;
`}
.row{
  position: relative;
}

.steps-arrow{
  display: block;
    position: absolute;
    top: 46px;
    width: 25%;
    left: 21%;
  }
.steps-arrow-2{
  display: block;
    position: absolute;
    top: 46px;
    width: 25%;
    right: 21%;
  }
.section-head{
  max-width: 930px;
  margin: auto;
  margin-bottom: 72px;
  text-align: center;
  ${media.lg`
    margin-bottom: 56px;
  `}
  .heading{
    margin-bottom: 24px;
  }
}
.steps-wrapper{
  position: relative;
  margin-bottom: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  ${media.lg`
    margin-bottom: 32px;
  `}
  .step-paragraph{
    max-width: 404px;
  }
  .step-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 96px;
    width: 96px;
    border-radius: 200px;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 32px;
    ${media.lg`
      margin-bottom: 16px;
    `}
  }
  .step-heading{
    margin-bottom: 16px;
    ${media.lg`
      margin-bottom: 8px;
    `}
  }
}

`

export default IdeaValidtionWrapper;