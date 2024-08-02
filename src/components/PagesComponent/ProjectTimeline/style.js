import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProjectTimelineWrapper = styled.div`
padding: 96px 0;
.heading{
  margin-bottom: 72px;
}
.timeline-wrapper{
  position: relative;
  padding-bottom: 56px;
  .timeline-steps{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 2;
    .step{
      background-color: ${({ theme }) => theme.colors.primaryColor};
      width: 24%;
      max-width: 320px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      gap: 4px;
      border-radius: 10px;
      position: relative;
      &.step-1{
        left: 0;
      }
      &.step-2{
        left: 15%;
      }
      &.step-3{
        left: 32%;
      }
      &.step-4{
        left: 54%;
      }
      &.step-5{
        left: 72%;
      }
      .sub-heading{
      color:${({ theme }) => theme.colors.whiteColor};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
      line-height: 16px;
      margin-bottom: 0;
      }
      p{
      color:${({ theme }) => theme.colors.whiteColor};
      font-size: 8px;
      line-height: 10px;
      margin: auto;
      margin-bottom: 0;
      text-align: center;
      }
    }
  }
}
.timeline-phases{
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  width: 100%;
  .phase{
    border-left: 1px dashed ${({ theme }) => theme.colors.bodyLight};
    font-size: ${({ theme }) => theme.fonts.BaseCustomFontSize} ;
    font-weight:  ${({ theme }) => theme.fontWeight.semiBold};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
    padding-left: 20px;
    &:last-child{
      display: none;
    }
  }
}

${media.lg`
padding: 56px 0;
.timeline-wrapper{
  padding-bottom: 0;
  .timeline-steps{
    gap: 36px;
    .step{
      width: calc(100% - 130px);
      left: 0 !important;
    }
  }
}
  .timeline-phases{
    display: flex;
    flex-direction: column;
    right: 0;
    left: auto;
    width: auto;
    .phase{
      align-items: center;
    }
  }
`}
`

export default ProjectTimelineWrapper;
