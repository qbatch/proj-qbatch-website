import styled from "styled-components";
import { media } from "../../../theme/media-mixins";


const ExtensionTypeWrapper = styled.div`
padding: 96px 0;
${media.md`
  padding: 56px 0;
`}
.heading{
  padding-bottom: 24px;
  text-align: center;
  max-width: 768px;
  margin: auto;
  text-transform: none;
}
.paragraph{
  padding-bottom: 56px;
  text-align: center;
  max-width: 930px;
  margin: auto;
  ${media.md`
    padding-bottom: 20px;
  `}
}
.inner-button{
  margin-top: 72px;
}
.inner-box{
  padding: 32px;
  border-bottom: 1px solid #D2D9DC;
  height: 100%;
  ${media.md`
    padding: 24px 0;
    p{
      margin-bottom: 0;
    }
  `}
  .inner-heading{
    text-transform: none;
  }
}
&.edu-learning{
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .heading{
    text-align: left;
    margin-right: auto;
    margin: unset;
    max-width: 100%;
  }
  .paragraph{
    text-align: left;
    margin-right: auto;
    margin: unset;
    max-width: 100%;
  }
}
&.power-integrate{
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    .heading{
      max-width: 100%;
    }
    ${media.md`
      .inner-button{
        margin-top: 40px;
      }
    `}
}
&.edu-learning{
  .inner-box{
    .inner-heading{
      max-width: 192px;
    }
  }
}
&.power-integrate{
  .inner-box{
    padding-left: 8px;
    padding-right: 8px;
  }
}
`

export default ExtensionTypeWrapper;
