import styled from "styled-components";

const LeaderCardWrapper = styled.div`
  .team-wrapper {
    max-width: 930px;
    margin: auto;
  }
  .inner-box-wrapper {
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    box-shadow: 2px 2px 12px 0px #00000029;
    padding: 167px 36px 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 435px;
    .img {
      margin-bottom: 16px;
      position: absolute;
      width:240px;
      height:280px;
      top: -98px;
      }
    }
    .inner-box {
      text-align: center;
    }
    .inner-box-header {
      margin-bottom: 16px;
      .name {
        color: ${({ theme }) => theme.colors.primaryColor};
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        font-weight: 700;
      }
    }
    .social {
      margin-bottom: 16px;
      img {
        height: 24px;
        width: 24px;
      }
    }
    .paragraph {
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      line-height: 24px;
      text-align: center;
      min-height: 120px;
    }
`;
export { LeaderCardWrapper };
