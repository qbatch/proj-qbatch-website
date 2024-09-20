import React from 'react'
import { navigate } from 'gatsby'
import { FeelingLikeYouAreInItAloneWrapper } from './style'
import Container from '../../UiComponent/Container'
import Button from '../../UiComponent/Button'

const FeelingLikeYouAreInItAlone = () => {
  return (
    <FeelingLikeYouAreInItAloneWrapper>
      <Container>
      <div className='feeling-section-wrapper'>
        <img src="/feeling-like.svg" title='feeling-like' alt="feeling-like" />
        <div className='content'>
          <h2>Feeling like you're in it alone?</h2>
          <p>We're your retail software partner, here to simplify your workflow >>> </p>
          <Button onClick={() => navigate('/contact')} text="Let’s Get Started" />
      </div>
      </div>
      </Container>
    </FeelingLikeYouAreInItAloneWrapper>
  )
}

export default FeelingLikeYouAreInItAlone
