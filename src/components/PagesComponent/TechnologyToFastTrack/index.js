import React from 'react'

import Slider from '../../UiComponent/Slider'

import { TechnologyToFastTrackWrapper } from './style'

import { TechnologyToFastTrackSliderData } from '../../../constants'

const TechnologyToFastTrack = () => {

  return (
    <TechnologyToFastTrackWrapper>
      <Slider
        data={TechnologyToFastTrackSliderData}
        heading="Technology to Fast-Track Your Fintech Success"
        paragraph="We use the latest technology to deliver high-grade fintech software development services, helping you build a rock-solid financial footprint in the ballooning market."
        seconedHeading=""
        width="300px"
        height="200px"
        className="humanizing-health-care-slider"
        btnClass="custom-btn"
        dividerClass="custom-divider"
        maxWidth="100%"
      />
    </TechnologyToFastTrackWrapper>
  )
}

export default TechnologyToFastTrack
