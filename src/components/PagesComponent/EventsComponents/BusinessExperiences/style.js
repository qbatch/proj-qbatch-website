import styled from "styled-components";

const BusinessExperienceWrapper = styled.div`
  padding: 96px 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  & > div{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  &.dark{
    .heading{
      color: ${({ theme }) => theme.colors.textColor};
    }
    .experience-box{
      background-color: #011212;
      .inner-heading{
        color:  ${({ theme }) => theme.colors.textColor};
      }
      p{
        color:  ${({ theme }) => theme.colors.whiteColor};
      }
    }
    button{
      background-color: ${({ theme }) => theme.colors.textColor};
      color:  ${({ theme }) => theme.colors.bdoyTextVariant};
    }
  }
  .heading {
    color: #fff;
    text-align: center;
    font-size: ${({ theme }) => theme.fsh2};
    max-width: 930px;
    margin: auto;
    span{
      text-decoration: underline;
    }
  }
  .experience-wrapper{
    padding: 72px 0;
    max-width: 930px;
    margin: auto;
  }
  .experience-box{
    background-color: #fff;
    padding: 32px;
    margin-bottom: 24px;
    text-align: center;
    &:last-child{
      margin-bottom: 0;
    }
    .inner-heading{
      color: #026363;
      margin-bottom: 8px;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    }
    p{
      margin-bottom: 0;
    }
  }

  button{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: #026363;
      padding: 12px;
      width: 100%;
      max-width: 460px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      border-radius: 4px;
      border: none;
      background-color: ${({ theme }) => theme.colors.whiteColor};
      margin-top: 24px;
      margin-bottom: 32px;
    }
`;

export default BusinessExperienceWrapper;
