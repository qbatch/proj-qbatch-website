import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HospitalityAndTravelBusinessesWrapper = styled.div`
padding: 96px 0px;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
padding: 40px 0px;
`}
section{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;
  grid-gap: 24px;
  ${media.sm`
    grid-template-columns: 1fr;
    align-items: center;
    place-items:center;
    `}
  .item{
    &.item-2{
      background: linear-gradient(to top, #D9ECFF -5.97%, rgba(217, 236, 255, 0) 149.03%);
      max-width: 470px;
      padding: 146px 30px;
      margin-left: auto;
      border-radius: 26px;
      ${media.sm`
        margin-left: 0;
    `}

    }
    h2{
      color: #0054A6;
      margin: 0;
    }
p{
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  margin: 0;
  color: #667176;
  margin-top: 24px;
  margin-bottom: 40px;
  ${media.sm`
    font-size: 14px;
    line-height: 18px;
    `}
}
ul {
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;
    padding-left: 16px;
    li{
      list-style: disc;
      font-size: 20px;
      font-weight: 500;
      line-height: 32px;
      text-align: left;
      color: #5F737C;
      ${media.sm`
    font-size: 14px;
    line-height: 18px;
    `}
    }
}
  }
}

`;
export { HospitalityAndTravelBusinessesWrapper };