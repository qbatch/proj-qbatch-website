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
    .fw-light {
      font-weight: ${({ theme }) => theme.fontWeight.light};
    }
    .heading {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 0;
    }

    @media (max-width: 1099px) {
      h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH2};
      }
    }
    @media (max-width: 768px) {
      h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
      }
    }
    @media (max-width: 499px) {
      h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
      }
    }
`;
export default GlobalStyles;
