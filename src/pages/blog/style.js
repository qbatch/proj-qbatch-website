import styled from 'styled-components'
import { media } from '../../theme/media-mixins'

const BlogWrapper = styled.div`
.categories-wrapper{
  padding-right: 70px;
}
.categories-btn{
  &:hover{
    border: 1px solid #0054A6;
  }
}
 .category-menu{
  border: 1px solid ${({ theme }) => theme.colors.dividerColor};
  border-radius: 16px;
  padding: 20px 16px;
  margin-top: 16px;
  min-width: 240px;
  position: absolute;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  &.close{
    display: none;
  }
  ul{
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    li{
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      cursor: pointer;
      color:  ${({ theme }) => theme.colors.textMedium};
      display: flex;
      align-items: center;
      gap: 8px;
      &::before{
        content: '';
        width: 0px;
        height: 2px;
        display: inline-block;
        background-color: ${({ theme }) => theme.colors.dangerColor} ;
      transition: 0.3s;
      }
      &:hover,
      &.active{
        font-weight:${({ theme }) => theme.fontWeight.semiBold};
        color: ${({ theme }) => theme.colors.primaryColor} ;
        &::before{
          width: 12px;
        }
      }
    }
  }
 }
`

export default BlogWrapper;