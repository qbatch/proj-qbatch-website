import styled from "styled-components";
import { media } from "../../../../theme/media-mixins";

const EventsFormWrapper = styled.div`
position: relative;
  .section-box-left{
    ${media.xl`
      padding-left: 0;
    `}
    ${media.lg`
      padding-left: 96px;
    `}
    ${media.md`
      padding: 96px 0;
    `}
    padding: 96px;

    .paragraph{
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      line-height: 48px;
    }
  }
  .form-wrapper{
    padding: 15%;
    ${media.lg`
      padding: 0 15% 15%;
    `}
    .form-paragraph{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-weight: ${({ theme }) => theme.fontWeight.normal};
    }
    .form-heading{
      color: ${({ theme }) => theme.colors.primaryColor};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      margin-bottom: 12px;
    }
    input, select{
      height: 48px;
      border: 1px solid ${({ theme }) => theme.colors.dividerColor};
      border-radius: 4px;
      margin-bottom: 24px;
      padding: 12px;
      box-shadow: 2px 2px 12px 0px #00000029;
      &:active, &focus{
        outline: none;
        border: none;
      }
    }
    label{
      margin-bottom: 8px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      text-align: left;
    }
    button{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: #fff;
      padding: 12px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      border-radius: 4px;
      border: none;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      margin-top: 24px;
      margin-bottom: 32px;
    }
    a{
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
  .event-input-form{
    display: flex;
    flex-direction: column;
  }
  .section-bg{
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    .left-box{
      width: 50%;
      background-color: #fff;
      display: flex;
      align-items: end;
      img{
        margin-bottom: 52px;
        position: relative;
        left: -10px;
      }
    }
    .right-box{
      width: 50%;
      background-color: #F7F8F9;
    }
  }

&.dark{
  .section-bg{
    .right-box{
      background-color: ${({ theme }) => theme.colors.secondaryColor};
    }
  }
  .form-wrapper{
    .form-paragraph{
      color:  ${({ theme }) => theme.colors.whiteColor};
    }
    .form-heading{
      color:  ${({ theme }) => theme.colors.textColor};
    }
    button{
      background-color: ${({ theme }) => theme.colors.textColor};
      color: ${({ theme }) => theme.colors.bodyTextVariant};
    }
    .link-text{
      color: ${({ theme }) => theme.colors.whiteColor};
      font-size:  ${({ theme }) => theme.fonts.baseFontSizeSm};
      a{
        color: ${({ theme }) => theme.colors.textColor};
        text-decoration: underline
      }
    }
  }
}
`

export default EventsFormWrapper;
