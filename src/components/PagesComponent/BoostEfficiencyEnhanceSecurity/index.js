import React from 'react'
import { navigate } from 'gatsby';

import Button from '../../UiComponent/Button';

import { BoostEfficiencyEnhanceSecurityWrapper } from './style'

const BoostEfficiencyEnhanceSecurity = () => {

  return (
    <BoostEfficiencyEnhanceSecurityWrapper>
      <h2>Boost Efficiency, Enhance Security, and Drive Growth</h2>
      <p>Ready to take your fintech company to the next level? Contact us today to discuss your unique needs!</p>
     <Button text="Consult your fintech expert" onClick={() => navigate('/contact')} />

    </BoostEfficiencyEnhanceSecurityWrapper>
  )
}

export default BoostEfficiencyEnhanceSecurity
