import React from 'react'
import { navigate } from 'gatsby'
import Container from '../../UiComponent/Container'
import Button from '../../UiComponent/Button'

import { FeelingLikeYouAreInItAloneWrapper } from './style'

const FeelingLikeYouAreInItAlone = ({img, heading, text, className, buttonText}) => {
  return (
    <FeelingLikeYouAreInItAloneWrapper className={className}>
      <Container>
      <div className='feeling-section-wrapper'>
        <img src={img || "/feeling-like.svg"} title='feeling-like' alt="feeling-like" />
        <div className='content'>
          <h2>{heading || "Feeling like you're in it alone?"}</h2>
          <p>{text || "We're your retail software partner, here to simplify your workflow >>>"} </p>
          <Button onClick={() => navigate('/contact')} text={buttonText || "Let’s Get Started"} />
      </div>
      </div>
      </Container>
    </FeelingLikeYouAreInItAloneWrapper>
  )
}

export default FeelingLikeYouAreInItAlone
