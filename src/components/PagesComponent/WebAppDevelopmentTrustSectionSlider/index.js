import React from 'react'
import Button from '../../UiComponent/Button'
import SliderWrapper from '../../UiComponent/Slider'
import { youCanTrustData } from '../../../constants'
import { SliderComponentWrapper } from './style'
import Container from '../../UiComponent/Container'


const SliderComponent = () => {
  return (
    <SliderComponentWrapper>
      <SliderWrapper
          heading="We Are Developers You Can Trust For Your Web App"
          paragraph="A web app is more than APIs and design, it’s following the human-to-human approach and building what the world needs."
          subParagraph="Developers that stay laser-focused and put equal effort into both back-end and front-end systems ensuring user experience and convenience from scratch to end— are rare. That’s why we as custom web application developers perform the daunting task by validating your vision with complete vigilance and launching web experiences that serve and leave a mark. "
          data={youCanTrustData}
          gridColumn
          className="developers-trust-slider web-app-development-wrapper"
        />
        <Button text="Get Started Risk-Free" />
    </SliderComponentWrapper>
  )
}

export default SliderComponent
