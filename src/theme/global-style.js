import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800&display=swap');

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
        font-weight:700;
        color:${({ theme }) => theme.colors.bodyTextVariant}
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
    h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH1};
    }
    h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH2};
    }
    h3{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3}
    }
    h4{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};     
    }
    p{
       font-size:${({ theme }) => theme.fonts.baseFontSizeSm};       
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
    .section-heading {
      h1 {
        color: ${({ theme }) => theme.colors.primaryColor};
        margin-bottom: 16px;
      }
      p {
        color: ${({ theme }) => theme.colors.textMedium};
        line-height: 32px;
      }
    }
    img,svg{
        max-width:100%;
    }
    
    .container {
      padding-right: 96px;
      padding-left: 96px;
    }

    .base-padding {
      padding: 96px;
    }

    @media (max-width: 1200px) {
      h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH2};
      }
      h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
      }
    }
    @media (max-width: 768px) {
      h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
      }
      h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
      }
      h4{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};     
      }
      .base-padding {
       padding: 72px;
      }
      p{
       font-size:${({ theme }) => theme.fonts.baseFontSize};       
      }
    }
    @media (max-width: 480px) {
      h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
      }
      h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
      }
      h4{
        font-size:${({ theme }) => theme.fonts.baseFontSize};     
      }
      .base-padding {
       padding: 52px;
      }
      p{
       font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};       
      }
    }
`;
export default GlobalStyles;
