import React from 'react'
import { navigate } from 'gatsby';
import Button from '../../UiComponent/Button';
import { HealthcareIndustryLeadersWrapper } from './style'

const HealthcareIndustryLeaders = () => {
  return (
    <HealthcareIndustryLeadersWrapper>
        <h2>Healthcare industry leaders often face a crucial decision: Should they build or buy software? Let's make a better decision!</h2>
        <Button className="expert-advice" onClick={() => navigate('/contact')}  text="Get Expert Advice" />
    </HealthcareIndustryLeadersWrapper>
  )
}

export default HealthcareIndustryLeaders
