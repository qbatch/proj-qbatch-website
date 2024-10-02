import React from 'react'
import { navigate } from 'gatsby'
import { FeelingLikeYouAreInItAloneWrapper } from './style'
import Container from '../../UiComponent/Container'
import Button from '../../UiComponent/Button'

const FeelingLikeYouAreInItAlone = ({heading, desc, btnText}) => {
  return (
    <FeelingLikeYouAreInItAloneWrapper>
      <Container>
      <div className='feeling-section-wrapper'>
        <img src="/feeling-like.svg" title='feeling-like' alt="feeling-like" />
        <div className='content'>
          <h2>{heading}</h2>
          <p>{desc}</p>
          <Button onClick={() => navigate('/contact')} text={btnText} />
      </div>
      </div>
      </Container>
    </FeelingLikeYouAreInItAloneWrapper>
  )
}

export default FeelingLikeYouAreInItAlone
