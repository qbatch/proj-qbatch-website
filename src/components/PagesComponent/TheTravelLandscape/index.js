import React from 'react'
import { TheTravelLandscapeWrapper } from './style'
import Button from '../../UiComponent/Button'
import Container from '../../UiComponent/Container'
import { navigate } from 'gatsby'

const TheTravelLandscape = () => {
  return (
    <TheTravelLandscapeWrapper>
      <Container>
        <h2>The travel landscape is evolving. Don't just survive it, thrive it!</h2>
        <p>We help travel companies navigate disruption and create opportunities with technology and innovation.</p>
        <Button text="Let’s Get Started" onClick={() => navigate('/contact')} />
      </Container>
    </TheTravelLandscapeWrapper>
  )
}

export default TheTravelLandscape
