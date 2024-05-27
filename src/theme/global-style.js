import { createGlobalStyle } from 'styled-components'

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
    h1,h2 {
        font-weight:700;
        color:${({ theme }) => theme.colors.bodyTextVariant};
    }
    h3,h4,h5,h6 {
      font-weight:600;
      color:${({ theme }) => theme.colors.bodyTextVariant};
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
        line-height: 68px;
    }
    h2, .text-h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH2};
        line-height: 52px;
    }
    h3, .text-h3{
        font-size:${({ theme }) => theme.fonts.baseFontSizeH3};
        line-height: 40px;
    }
    h4, .text-h4{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg}; 
        line-height: 32px;
    }
    h5, .text-h5{
      font-size:${({ theme }) => theme.fonts.baseFontSizeSm}; 
      line-height: 32px;
    }
    .text-xl {
      font-size:${({ theme }) => theme.fonts.baseFontXl}; 
    }
    .text-h4-light{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg}; 
        line-height: 32px;
        font-weight:${({ theme }) => theme.fontWeight.light} ;
    }
    p{
       color: ${({ theme }) => theme.colors.textMedium};
       font-weight: ${({ theme }) => theme.fontWeight.normal};
       line-height: 24px;
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
    .text-color{
         color: ${({ theme }) => theme.colors.textColor};
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
        margin-bottom: 24px;
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
        line-height: 40px;
      }
      h2, .text-h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
        line-height: 32px;
      }
      h4, .text-h4{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
        line-height: 24px;     
      }
      .text-h4-light{
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      }
      p{
       font-size:${({ theme }) => theme.fonts.baseFontSize};       
      }
      h3, .text-h3{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
        line-height: 32px;
      }
    }
    @media (max-width: 480px) {
      h1, .text-h1{
        font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
        line-height: 32px;
      }
      h2 .text-h2{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
        line-height: 32px;
      }
      h4, .text-h4{
        font-size:${({ theme }) => theme.fonts.baseFontSize};     
      }
      p{
       font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};       
      }
      h3, .text-h3{
        font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
        line-height: 24px;
      }
      h5, .text-h5{
        font-size:${({ theme }) => theme.fonts.baseFontSize}; 
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
    .bg-added{
      background-image: url('/we-can-help.svg');
      background-size: cover;
      width: 100%;
      background-repeat: no-repeat;
      padding: 48px 40px;
      text-align: center;
      border-radius: 24px 24px 0 24px;
      margin-bottom: 32px;
      height: 100%;
      @media(max-width:992px){
      
        &.bg-remove{
        background-image:none ;
        background-color:${({ theme }) => theme.colors.secondaryColor};
        padding: 24px;
      }
      @media (max-width: 575px){
        .gap-4{
          flex-wrap:wrap;
          justify-content: center;
        }
      }
    
      }
        .add-border-radius{
          border-radius: 12px 12px 0px 12px;
          @media (max-width: 575px){
            width: 100%;
            height: 210px;
          }
       } 
       &.john-banner {
        .add-border-radius{
          object-position: 100% 10%;
          @media (max-width: 575px){
            width: revert-layer;
            height: 210px;
          }
       } 
       }
      }
      .no-bg-image{
        border-radius: 24px 24px 0px 24px;
        border:1px solid  ${({ theme }) => theme.colors.dividerColor};
        padding: 36px;
        margin-bottom:24px;
        background: url('/author-box-bg.svg');
        background-size: cover;
        .author-img{
          img {
            width:72px;
            height:72px;
          }
        }
        @media(max-width:991px){
          flex-wrap:wrap;
        }
        .username{
          font-size:${({ theme }) => theme.fonts.baseFontSize};
          color:${({ theme }) => theme.colors.whiteColor};
          font-weight: ${({ theme }) => theme.fontWeight.medium};
          line-height: 16px;
          margin-bottom: 8px;
          white-space: nowrap;
          display: block;
        }
        .caption{
          font-size:${({ theme }) => theme.fonts.baseFontSizeXs};
          color:${({ theme }) => theme.colors.whiteColor};
          line-height: 14px;
          margin-bottom: 6px;
          display: block;
        }
        .paragraph{
          font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
          color:${({ theme }) => theme.colors.whiteColor};
          line-height: 24px;
        }
      }
    .paragraph{
      &.quotes-block{
        display: block;
      }
      h1{
       color: ${({ theme }) => theme.colors.whiteColor}; 
        margin-bottom:16px; 
      }
      h4 {
        letter-spacing: 0px;
        line-height: 32px; 
        margin-bottom:32px;
      }
      p{
       color: ${({ theme }) => theme.colors.whiteColor};
      }
      button{
      color: rgb(255, 255, 255);
      padding:8px 24px;
      margin-top: 16px;
      border-radius:50px;
      font-size: 20px;
      display: inline-block;
      font-weight: 400;
      line-height: 1.5;
      color: #fff;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      font-weight:600;
      user-select: none;
      background-color: rgb(237, 28, 36);
      border: 1px solid rgb(237, 28, 36);
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      a{
              color: #fff;
      }
      }
      ul,ol{
        list-style:disc;
        padding-left:24px;
        font-size: 16px;
              color:${({ theme }) => theme.colors.bodyTextVariant};
        li{
          margin-bottom:8px;
        }
      }
      ol{
        list-style:decimal;
        padding-left:24px;
        font-size: 16px;
        color:${({ theme }) => theme.colors.bodyTextVariant};
        li{
          margin-bottom:8px;
        }
      }
  }
  .quote-template{
    & > div{
      align-items: center;
    }
    .img-wrapper{
      position: relative;
      .small-quotes{
        position: absolute;
        left: 12px;
      }
      .quote-author-image{
        margin-top: 12px;
        max-width: 114px;
        aspect-ratio: 2/3;
      }
    }
    .fs-12{
      font-size: 12px !important;
      line-height: 18px !important;
    }
  }
      .paragraph{
        .raw-html-embed 
        .quotes-block{
          p{
              color: ${({ theme }) => theme.colors.whiteColor};  
          }
      }
      img{
            object-fit: cover;
            border-radius: 12px 12px 0 12px;
          }
    .raw-html-embed .quotes-block{
 h1{
       color: ${({ theme }) => theme.colors.whiteColor}; 
      }
      }
  
      
     
      h4 {
        letter-spacing: 0px;
        line-height: 32px; 
        margin-bottom:32px;
      }
     
  }
  .divider-color{
     color: ${({ theme }) => theme.colors.dividerColor};
  }
#freshteam-widget{
    background-color:transparent!important;
  div:first-child{
  background-color:transparent!important;
  }

  @media(max-width:1200px){
    .content{
      width:100%!important;
    }
  }
}
.Toastify__toast-container {
  z-index: 99999;
}
.brand-color,.back-to-jobs{
  color:#000!important;
}
.icon-arrow-left{
  fill:#000!important;
}
.job-details-content{
  margin-top:0px!important;
}
.flex-1{
  flex:1;
}
.table {
  box-shadow: 2px 2px 12px 0px #00000029;
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 12px;
  overflow: auto;
  table {
    width: 100%;
    tbody {
      tr {
        &:first-child {
          background-color: ${({ theme }) => theme.colors.primaryColor};
          span {
            background-color: transparent !important;
            color: ${({ theme }) => theme.colors.whiteColor} !important;
          }
          td {
            padding: 11px 24px !important;
            border-top: none !important;
            &:last-child {
              border-right: none !important;
            }
            &:first-child {
              border-left: none !important;
            }
          }
        }
        &:last-child {
          border-bottom-width: 0 !important;
          td {
            border-bottom: none !important;
          }
        }
        td {
          padding: 16px 24px !important;
          border-color: ${({ theme }) => theme.colors.dividerColor} !important;
          vertical-align: middle !important;
          &:first-child {
            border-left: none !important;
          }
          &:last-child {
            border-right: none !important;
          }
          span {
            color: ${({ theme }) => theme.colors.textMedium} !important;
            font-weight: ${({ theme }) => theme.fontWeight.medium} !important;
          }
        }
      }
    }
  }
}
`
export default GlobalStyles
