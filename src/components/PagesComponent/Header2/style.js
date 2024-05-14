import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const Header2Wrapper = styled.div`
  position: relative;
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        & > a{
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
        .mega-menu {
          position: absolute;
          background-color: white;
          background-image: url('/mega-menu-bg.svg');
          background-size: cover;
          background-position: top left;
          border-radius: 0 0 8px 8px;
          padding: 44px 0;
          z-index: 999;
          top: 75px; 
          left: 0;
          right: 0;
          visibility: hidden;
          opacity: 0;
          transform: translateY(-70%); 
          transition: visibility 0s, opacity 0.6s ease-in-out, transform 0.3s ease-out; 
          ul {
            display: flex;
            gap: 24px 0;
            flex-wrap: wrap;
            padding: 0;
            & > li{
              width: 33.33%;
              position: relative;
              display: flex;
              align-items: center;
                transition: 0.3s ease-in;
                a{
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
              &:hover{
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
        &:hover {
          & > a{
            font-weight:  ${({ theme }) => theme.fontWeight.semiBold};
            color: ${({ theme }) => theme.colors.primaryColor} ;
            &::after{
              width: 16px;
              visibility: visible;
            }
          }
          .mega-menu {
            visibility: visible;
            opacity: 1;
            transform: translateY(0); 
            transition: visibility 0s, opacity 0.6s ease-in-out, transform 0.3s ease-out;
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
    }
  }
  }
`;

export default Header2Wrapper;
