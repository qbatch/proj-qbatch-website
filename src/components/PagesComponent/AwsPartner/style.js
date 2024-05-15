import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AwsPartnerWrapper = styled.div`
      background-color: ${({ theme }) => theme.colors.whiteColor};
      box-shadow: 2px 2px 12px 0px #00000029;
      border-radius:24px 24px 0px 24px;
      border:1px solid #D2D9DC;
      padding:16px 104px;
      max-width: 800px;
      margin: 0 auto;
      margin-top: -60px;
      z-index: 98;
      position: relative;
      img{
            margin-bottom:16px;
      }
       ${media.sm`
       padding:24px;
  ` }

`
export default AwsPartnerWrapper;
