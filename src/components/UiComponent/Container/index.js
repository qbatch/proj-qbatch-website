import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const Container = styled.div`
  padding: 0 96px;
  height:100%;
  width: 100%;
  ${media.lg`
  padding: 0 80px;
  `}

  ${media.md`
  padding: 0 60px;
  `}

  ${media.sm`
  padding: 0 40px;
  `}

  ${media.xs`
    padding: 0 24px;
  `}
  @media(min-width:1600px) {
    max-width: 1600px;
    margin: 0 auto;
  }
`
export default Container
