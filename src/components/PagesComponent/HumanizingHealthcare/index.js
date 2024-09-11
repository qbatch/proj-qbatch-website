import React from 'react'
import { HumanizingHealthcareWrapper } from './style'
import Slider from '../../UiComponent/Slider'
import { HumanizingHealthcareSliderData } from '../../../constants'

const HumanizingHealthcare = () => {
  
  return (
    <HumanizingHealthcareWrapper>
      <Slider
        data={HumanizingHealthcareSliderData}
        heading="Humanizing Healthcare: Qbatch Software Solutions"
        paragraph="As a healthcare software development company, Qbatch facilitates various institutions, from hospitals to startups, to improve patient care towards a more resilient healthcare system."
        seconedHeading=""
        width="300px"
        height="200px"
        className="humanizing-health-care-slider"
        btnClass="custom-btn"
        dividerClass="custom-divider"
        maxWidth="100%"
      />
    </HumanizingHealthcareWrapper>
  )
}

export default HumanizingHealthcare
