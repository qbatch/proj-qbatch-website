import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const Header2Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99999;
  background-color:${({ theme }) => theme.colors.whiteColor} ;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  height: 80px;
  margin: auto;
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
  .header-logo{
    min-width: 100px;
    display: block;
    img{
      min-width: 100px;
    }
  }
  @media (min-width: 992px){

  .menu {
    & > ul {
      display: flex;
      gap: 48px;
      align-items: center;
      justify-content: center;
      margin: auto;
      & > li {
        padding: 28px 0;
        .link-wrapper{
          a.active{
              font-weight:  ${({ theme }) => theme.fontWeight.normal};
              color: ${({ theme }) => theme.colors.primaryColor} ;
              &::after{
                width: 16px;
                visibility: visible;
              }
          }
          button{
            display: none;
          }

        a, span{
          color: ${({ theme }) => theme.colors.bodyLight} ;
          font-weight:  ${({ theme }) => theme.fontWeight.light};
          transition: 0.3s;
          position: relative;
          &::after{
            content: '';
            height: 2px;
            width: 0;
            display: block;
            visibility: hidden;
            background-color:${({ theme }) => theme.colors.dangerColor} ;
            position: absolute;
            bottom: -4px;
            transition: 0.3s ease-in;
          }
        }
        }
        .mega-menu {
          position: absolute;
          background-color: white;
          background-image: url('/mega-menu-bg.svg');
          background-size: cover;
          background-position: top left;
          border-radius: 0 0 8px 8px;
          padding: 44px 0 20px;
          z-index: 90;
          top: 80px; 
          left: 0;
          right: 0;
          visibility: hidden;
          opacity: 0;
          z-index: -1;
          transform: translateY(-70%); 
          transition: visibility 0s, opacity 0.6s ease-in-out, transform 0.3s ease-out; 
          .menu-heading{
            font-size:  ${({ theme }) => theme.fonts.baseFontSize};
            font-weight:  ${({ theme }) => theme.fontWeight.bold};
            color: ${({ theme }) => theme.colors.textMedium};
            line-height: 32px;
          }
          &.multi-menu{
            padding-bottom: 44px;
            ul{
              margin-top: 20px;
              column-count: 2;
              & > li{
                padding-right: 16px;
                padding-bottom: 16px;
              }
            }
            .row{
              .menu-col{
                position: relative;
                &:after{
                  content: '';
                  height: calc(100% - 40px);
                  width: 1px;
                  background-color: ${({ theme }) => theme.colors.dividerColor};
                  display: block;
                  position: absolute;
                  top: 40px;
                  left: -10%;
                }
                &:first-child{
                  &::after{
                    display: none;
                  }
                }
              }
            }
          }
          ul {
            column-count: 4;
            padding: 0;
            & > li{
              position: relative;
              display: flex;
              align-items: center;
              transition: 0.3s ease-in;
              padding-bottom: 28px;
                a, span{
                  color: ${({ theme }) => theme.colors.textMedium} ;
                  font-weight:  ${({ theme }) => theme.fontWeight.normal};
                }
              &::before{
                content: '';
                display: inline-block;
                height: 2px;
                width: 0px;
                background-color: ${({ theme }) => theme.colors.dividerColor};
                border: none;
                visibility: hidden;
                transition: 0.3s ease-in;
              }
              &.active,
              &:hover{
                a, span{
                  font-weight:  ${({ theme }) => theme.fontWeight.semiBold};
                  color: ${({ theme }) => theme.colors.primaryColor} ;
                }
                &::before{
                  background-color: ${({ theme }) => theme.colors.dangerColor};
                  visibility: visible;
                  width: 12px;
                  margin-right: 8px;
                }
              }
            }
          }
        }
        &:hover {
          .link-wrapper{
            a, span{
              font-weight:  ${({ theme }) => theme.fontWeight.normal};
              color: ${({ theme }) => theme.colors.primaryColor} ;
              &::after{
                width: 16px;
                visibility: visible;
              }
            }
          }
          .mega-menu {
            visibility: visible;
            opacity: 1;
            transform: translateY(0); 
            transition: visibility 0s, opacity 0.6s ease-in-out, transform 0.3s ease-out;
            box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.13);
            -webkit-box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.13);
            -moz-box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.13);
          }
        }
        .mega-menu {
          transition: visibility 0s, opacity 0.5s ease-in-out, transform 0.3s ease-out; 
        }
        &:not(:hover) {
          .mega-menu {
            transition: visibility 0.5s, opacity 0.3s ease-in-out, transform 0.6s ease-in; 
            opacity: 0;
            transform: translateY(-70%); 
            
          }
        }
      }

      ${media.xl`
        gap: 32px;
          & > li{
            a{
              font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
            }
            .mega-menu{
                &.multi-menu .row .menu-col{
                  &::after{
                    display: none;
                  }
                }
              }
          }
        `}
      ${media.lg`
        gap: 24px;
         & > li{
            a{
              font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
            }
          }
        `} 
    }
  }
  }
  ${media.md`
    .menu{
      position: absolute;
      overflow: scroll;
      height: calc(100vh - 80px);
      top: 80px;
      padding: 0 60px;
      margin-bottom: 32px;
      width: 100%;
      left: 0;
      right: 0;
      background:${({ theme }) => theme.colors.whiteColor};
      &.close{
        visibility: hidden;
        opacity: 0;
        transform: translateY(-100%); 
        transition: visibility 0.3s, opacity 0.3s ease-in-out, transform 0.6s ease-out;
      }
      &.open{
        visibility: visible;
        opacity: 1;
        transform: translateY(0); 
        transition: visibility 0s, opacity 0.3s ease-in-out, transform 0.6s ease-out;
      }
      .link-wrapper{
        display: flex;
        align-items: center;
        padding-bottom: 8px;
        margin-top: 32px;
        border-bottom: 1px solid  ${({ theme }) => theme.colors.dividerColor};
        a{
          color: ${({ theme }) => theme.colors.textMedium} ;
          &::before{
            content: '';
            display: inline-block;
            height: 2px;
            width: 0px;
            background-color: ${({ theme }) => theme.colors.dividerColor};
            border: none;
            visibility: hidden;
            transition: 0.3s ease-in;
            margin-bottom: 4px;
          }
          &.active{
            font-weight:  ${({ theme }) => theme.fontWeight.semiBold};
            color: ${({ theme }) => theme.colors.primaryColor} ;
            &::before{
              background-color: ${({ theme }) => theme.colors.dangerColor};
              visibility: visible;
              width: 12px;
              margin-right: 8px;
            }
          }
        }
        button{
          margin-left: auto;
          border: none;
          background: transparent;
          &.open{
            transform: rotate(180deg);
            img{
              filter: brightness(0) saturate(100%) invert(16%) sepia(99%) saturate(4605%) hue-rotate(350deg) brightness(95%) contrast(95%);
            }
          }
        }
        &.open{
          a{
            font-weight:  ${({ theme }) => theme.fontWeight.semiBold};
            color: ${({ theme }) => theme.colors.primaryColor} ;
            &::before{
              background-color: ${({ theme }) => theme.colors.dangerColor};
              visibility: visible;
              width: 12px;
              margin-right: 8px;
            }
          }
        }
      }
      .mega-menu{
        &.close{
          visibility: hidden;
          height: 0px;
          opacity: 0;
          transition: visibility 0.3s, opacity 0.3s ease-in-out;
          .menu-col{
          height: 0px;
        }
        }
        &.open{
          visibility: visible;
          opacity: 1;
          transition: visibility 0s, opacity 0.3s ease-in-out;
        }
        & > div{
          padding-left: 0;
          & > ul{
            padding: 16px 0 0;
            li{
              padding-bottom: 12px;
              &:last-child{
                padding-bottom: 0;
              }
              a{
                color:  ${({ theme }) => theme.colors.bodyLight};
              }
              &::before{
                content: '';
                display: inline-block;
                height: 2px;
                width: 0px;
                background-color: ${({ theme }) => theme.colors.dividerColor};
                border: none;
                visibility: hidden;
                transition: 0.3s ease-in;
                margin-bottom: 4px;
              }
              &.active{
                a{
                  font-weight:  ${({ theme }) => theme.fontWeight.semiBold};
                  color: ${({ theme }) => theme.colors.primaryColor} ;
                }
                &::before{
                  background-color: ${({ theme }) => theme.colors.dangerColor};
                  visibility: visible;
                  width: 12px;
                  margin-right: 8px;
                }
              }
            }
          }
        }
      }
    }
    .menu-col{
      .menu-heading{
        padding: 16px 0 4px;
        display: block;
        font-size:  ${({ theme }) => theme.fonts.baseFontSize};
        font-weight:  ${({ theme }) => theme.fontWeight.bold};
        color:  ${({ theme }) => theme.colors.textMedium};
        line-height: 32px;
      }
      ul{
        column-count: 2;
        li{
          padding-bottom: 12px;
          a{
            font-size:  ${({ theme }) => theme.fonts.baseFontSize};
            font-weight:  ${({ theme }) => theme.fontWeight.normal};
            color:  ${({ theme }) => theme.colors.bodyLight};
          }
        }
      }
    }
  `}
  ${media.sm`
    .menu{
      padding: 0 30px;
    }
  `}
    .header-btn{
      display: flex;
      gap: 12px;
      align-items: center;
      .burger-icon {
      width: 32px;
      height: 32px;
      position: relative;
      cursor: pointer;
      display: none;
        ${media.md`
          display: inline-flex;
        `}
      span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.textMedium};
        position: absolute;
        right: 0;
        transition: transform 0.3s ease-in;
        &:first-child {
          top: 8px;
        }
        &:nth-child(2) {
          top: 48%;
          transform: translateY(-50%);
        }
        &:last-child {
          bottom: 8px;
          width: 12px;
        }
      }
      &:hover {
        span {
          &:first-child {
            transform: translateY(0px);
            background-color: ${({ theme }) => theme.colors.primaryColor};
          }
          &:nth-child(2) {
            transform: translateY(6px);
            width: 12px;
            background-color: ${({ theme }) => theme.colors.dangerColor};
          }
          &:last-child {
            transform: translateY(-7px);
            width: 100%;
            background-color: ${({ theme }) => theme.colors.primaryColor};
          }
        }
      }
    }
    }
`;

export default Header2Wrapper;
