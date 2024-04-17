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
    padding: 240px 36px 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img {
      margin-bottom: 16px;
      position: absolute;
      top: -120px;
      max-width: 70%;
      }
    }
    .inner-box {
      text-align: center;
    }
    .inner-box-header {
      margin-bottom: 16px;
      .name {
        color: ${({ theme }) => theme.colors.primaryColor};
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
    }
`;
export { LeaderCardWrapper };
