import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProjectAssetsWrapper = styled.div`
padding: 96px 0; 
.box{
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 96px 76px;
  border-radius: 60px;
  display: flex;
  flex-wrap: wrap;
  .main-heading{
    color: ${({ theme }) => theme.colors.whiteColor};
    width: 50%;
    span{
      max-width: 311px;
      display: block;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
  .font-info{
    width: 50%;
    .heading{
      color: ${({ theme }) => theme.colors.whiteColor};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      padding-bottom: 4px;
    }
    .font-weights{
      display: flex;
      justify-content: space-between;
      max-width: 300px;
      color: #FFFFFF66;
    }
  }
  .font-face{
    font-size: 290px;
    line-height: 294px;
    color: ${({ theme }) => theme.colors.whiteColor};
    width: 50%;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  .colors{
    display: flex;
    justify-content: space-between;
    gap: 32px;
    width: 50%;
    .wrapper{
      width: 100%;
      .color-palate{
        height: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
        .color{
          height: 100%;
          max-height: 245px;
          min-height: 96px;
          width: 56%;
          background-color: red;
          border-radius: 40px;
        }
      }
      span{
        color: #FFFFFF66;
        margin-top: -10px;
        display: block;
      }
    }
  }
}
.box-sm{
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 48px 75px;
  border-radius: 60px;
  .heading{
    color: ${({ theme }) => theme.colors.whiteColor};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 32px;
  }
  img{
    height: 350px;
    object-fit: contain;
    width: 100%;
    object-position: center;
  }
}
${media.lg`
  background-color:  ${({ theme }) => theme.colors.secondaryColor};
  padding: 56px 0;
  .box{
    padding: 0;
    align-items: center;
    .main-heading{
      order: 1;
      width: 100%;
    }
    .font-info{
      order: 3;
    }
    .font-face{
      order: 2;
      font-size: 96px;
      line-height: 116px;
    }
    .colors{
      width: 100%;
      order: 4;
      margin: 28px 0 56px;
      .wrapper{
        span{
          margin-top: 8px;
        }
      }
    }
  }
  .box-sm{
    padding: 0;
    padding-bottom: 32px;
    img{
      height: auto;
    }
  }
`}
`

export default ProjectAssetsWrapper;
