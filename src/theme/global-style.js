import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        font-size:${({ theme }) => theme.fonts.baseFontSize};    
        font-weight:400;
        line-height:normal;
        font-family: 'Inter Tight', sans-serif;
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.backgroundColor};  
        box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight:600;
        color:${({ theme }) => theme.colors.bodyTextVariant};
        text-transform: capitalize;
    }
    a{
        color:${({ theme }) => theme.colors.primaryColor};
        text-decoration:none;
    }
    ul{
        margin:0;
        padding:0;
        list-style:none;
      }
    h1, .text-h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH1};
    }
    h2, .text-h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH2};
    }
    h3, .text-h3{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3}
    }
    h4, .text-h4{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg}; 
        letter-spacing : 0.14px ;
    }
    .text-h4-light{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg}; 
        line-height: 32px;
        font-weight:${({ theme }) => theme.fontWeight.light} ;
    }
    p{
       font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
       color: ${({ theme }) => theme.colors.textMedium};   
       letter-spacing : 0.14px ; 
    }
    label,caption{
        font-size:${({ theme }) => theme.fonts.baseFontSize};      
    }
    .color-danger {
      color: ${({ theme }) => theme.colors.dangerColor};
    }
    .color-primary {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
    .fw-light {
      font-weight: ${({ theme }) => theme.fontWeight.light};
    }
    .heading {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 0;
    }
    .pointer{
      cursor:pointer;
    }
    .section-heading {
      h1 .text-h1{
        color: ${({ theme }) => theme.colors.primaryColor};
        margin-bottom: 16px;
      }
      p {
        line-height: 32px;
        letter-spacing: 0.19px;
      }
    }

  .underline-heading{
    color: ${({ theme }) => theme.colors.bodyText};
    font-weight: 700;
    position: relative;
    margin: 0;
    &::before{
      content: "";
      position: absolute;
      height: 1px;
      width: 24px;
      bottom: 0px;
      background-color: #ED1C24;
    }
  }
    img,svg{
        max-width:100%;
    }
    .header-drawer {
      overflow: auto;
    }
    .blog-badge {
      padding: 6px 12px;
      background-color: ${({ theme }) => theme.colors.whiteColor};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      font-weight: ${({ theme }) => theme.fontWeight.baseFontSizeXs};
      color: ${({ theme }) => theme.colors.primaryColor};
      border: 1px solid ${({ theme }) => theme.colors.dividerColor};
      height: 28px;
      box-sizing: border-box;
      border-radius: 32px;
      display: inline-block;
    }
    .was-validated .form-check-input:valid {
      border-color: #ccc;
      &:checked {
        background-color: transparent;
      }
    }
    .was-validated .form-check-input:valid~.form-check-label {
      color: #5F737C;
    }
    @media (max-width: 1200px) {
      h1, .text-h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH2};
      }
      h2, .text-h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
      }
    }
    @media (max-width: 768px) {
      h1, .text-h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
      }
      h2, .text-h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
      }
      h4, .text-h4{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};     
      }
      .text-h4-light{
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      }
      p{
       font-size:${({ theme }) => theme.fonts.baseFontSize};       
      }
      h3, .text-h3{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg}
      }
    }
    @media (max-width: 480px) {
      h1, .text-h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
      }
      h2 .text-h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
      }
      h4, .text-h4{
        font-size:${({ theme }) => theme.fonts.baseFontSize};     
      }
      p{
       font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};       
      }
      h3, .text-h3{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm}
      }
    }
    .fs-24{
      font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
    }
    .scrollmagic-pin-spacer{
      background-color: ${({ theme }) => theme.colors.backgroundColor};
    }
    .tabs-buttons{
      border: 1px solid rgb(210, 217, 220);
    border-radius: 32px;
    background-color: rgb(255, 255, 255);
    color: rgb(95, 115, 124);
    padding: 12px 20px;
    height: 48px;
        white-space: nowrap;
    &.active{
      background-color: rgb(0, 84, 166);
    color: rgb(255, 255, 255);
    border-radius: 32px;
    border: 1px solid rgb(0, 84, 166);
    }
    }
`
export default GlobalStyles;
