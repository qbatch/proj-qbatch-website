import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
<<<<<<< HEAD
    @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800&display=swap');

=======
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;600;700&display=swap');
>>>>>>> 77f241f243a9224626ee1e5dbdd0aec835c1caa9
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
    img,svg{
        max-width:100%;
    }
    
    .container {
        padding-right: 24px;
        padding-left: 24px;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }

@media (max-width: 1600px) {
    .container {
        max-width: 1600px;
    }
}
@media (min-width: 1900px) {
    .container {
        max-width: 1900px;
    }
}
@media (min-width: 768px) {
  .container {
      width: 945px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1428px;
  }
}


`;
export default GlobalStyles;
