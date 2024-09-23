import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const PowerfulRetailSolutionsWrapper = styled.div`
padding: 96px 0px;
${media.sm`
padding: 40px 0px;
`}
h2{
font-size: 40px;
font-weight: 700;
line-height: 52px;
text-align: center;
color: #0054A6;
margin:0;
${media.sm`
  font-size: 32px;
  line-height: 40px;
  text-align: left;
`}
}
p{
  color: #5F737C;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  margin:0;
  margin-top: 24px;
  ${media.sm`
  text-align: left;
`}
}
.card-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 72px;
  grid-gap: 24px;
  grid-row-gap: 40px;
  ${media.sm`
    grid-template-columns: 1fr;
    margin-top: 32px;
    grid-row-gap: 24px;
    `}
  .card-item {
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;
    background-color: #fff;
    border: 1px solid #D2D9DC;
    border-radius: 24px 24px 0px 24px;
    padding: 32px;
    ${media.md`
      padding: 16px 24px;
      `}
    .card-title {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    grid-gap: 16px;
    h3{
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      text-align: left;
      color: #0054A6;
    }
}
.content{
display: flex;
flex-direction: column;
grid-row-gap: 12px;
  h4{
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
    margin: 0;
    color:#2D2F31;
  }
  p{
    color: #5F737C;
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

  }
}
}
}
`;
export { PowerfulRetailSolutionsWrapper }
