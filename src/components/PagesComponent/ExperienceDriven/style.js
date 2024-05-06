import styled from "styled-components";
import { media } from "../../../theme/media-mixins";


const ExperienceDrivenWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.md`
  padding: 56px 0;
`}
.sub-heading{
  font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  color: ${({ theme }) => theme.colors.textMedium};
  padding-bottom: 16px;
  text-align: center;
  margin: auto;
  display: block;
}
.heading{
  text-align: center;
  margin: auto;
  padding-bottom: 120px;
  text-transform: none;
  ${media.md`
    padding-bottom: 56px;
  `}
}
.inner-box{
  padding-bottom: 72px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${media.md`
    padding-bottom: 32px
  `}
  img{
    height: 114px;
    width: 114px;
    object-fit: contain;
    margin: auto;
  }
}
`

export default ExperienceDrivenWrapper;