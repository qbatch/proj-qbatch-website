import styled from "styled-components";

const NewsRoomWrapper = styled.div`
  margin-bottom: 96px;
  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 32px;
  }
  .news-banner {
    background: url("/news-room-bg.svg");
    background-size: cover;
    background-position: center;
    border-radius: 24px 24px 0 24px;
    padding: 48px;
    height: 408px;
    display: flex;
    flex-direction: column;

    .full-flex {
      flex: 1;
    }
    h3 {
     color: ${({ theme }) => theme.colors.whiteColor};
     line-height: 24px;
     letter-spacing: 0.4px
    }
  }
`;

export default NewsRoomWrapper;
