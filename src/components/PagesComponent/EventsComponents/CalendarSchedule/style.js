import styled from "styled-components";

const CalendarScheduleWrapper = styled.div`
padding: 96px 0;
border-top: 1px solid ${({ theme }) => theme.colors.dividerColor};
overflow-x: hidden;
.calendar-schedule-inner{
  .inner-left{
    text-align: center;
    margin: auto;
    .heading{
      margin-bottom: 24px;
    }
    .paragraph{
      max-width: 700px;
      margin: auto;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      line-height: 32px;
      padding-bottom: 24px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      span{
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
    .paragraph-small{
      margin-bottom: 18px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
    }
    .socials{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      img{
        height: 24px;
        width: 24px;
        object-fit: contain;
        filter: brightness(0) saturate(100%) invert(60%) sepia(18%) saturate(408%) hue-rotate(170deg) brightness(89%) contrast(88%);
      }
    }
  }
}
.calendly-container{
  width: 1000px;
  margin: auto;
  height: 700px;
  @media (max-width: 1287px){
    width: 650px;
    height: 1070px;
  }
  @media (max-width: 767px){
    width: 100%;
    height: 1070px;
    margin-bottom: -66px;
  }
}
.solution-bg{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
`

export default CalendarScheduleWrapper;
