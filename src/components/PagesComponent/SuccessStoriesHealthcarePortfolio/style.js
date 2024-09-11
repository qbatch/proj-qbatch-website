import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SuccessStoriesHealthcarePortfolioWrapper = styled.div`
padding: 96px 0;
border: 1px solid ${({ theme }) => theme.colors.dividerColor};
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2{
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  text-align: left;
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin: 0;
  ${media.lg`
  font-size: 32px;
  line-height: 42px;
`}
${media.sm`
  font-size: 24px;
  line-height: 32px;
`}
${media.mobile`
    text-align:left;
    `}
  }
  button{
    ${media.sm`
    display: none;
    `}
  }
}
.mobile-base-button{
  display: none;
  ${media.sm`
    display: block;
    `}
}
.cards-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  margin-top: 72px;
  .card-item{
    overflow: hidden;
    img.banner-image{
          transition: .4s ease-in;
      }
    &:hover{
      p.text{
        background: linear-gradient(180deg, #002548 0%, #0054A6 100%);
        color:#fff;
        transition: .4s ease-in;
      }
      img.banner-image{
          transform:scale(1.2);
          transition: .2s ease-in;
      }
}
  }
  img{
    max-width: 100%;
    width: 100%;
  }
  .card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    img{
    max-width: 100%;
    width: auto;
  }
    p.text{
      padding: 4px 8px;
      background-color: #fff;
      font-size: 12px;
      font-weight: 300;
      line-height: 14px;
      text-align: left;
      color: ${({ theme }) => theme.colors.primaryColor};
      margin: 0;
      transition: .2s ease-in;
    }
  }
  p{
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  color: #5F737C;
  margin: 0;
  }
}
`;

export { SuccessStoriesHealthcarePortfolioWrapper }