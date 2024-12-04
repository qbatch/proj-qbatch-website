"use-client"
import React from 'react'
import { navigate } from 'gatsby'

import Button from '../../UiComponent/Button';
import Container from '../../UiComponent/Container';

import { IroncladSecurityMeasuresWrapper } from './style'

const IroncladSecurityMeasures = () => {

  return (
    <IroncladSecurityMeasuresWrapper>
      <Container>
        <div className='card-overlay'>
          <img src="/security-measure.svg" />
          <div className='title'>
            <h2>Can you confidently say your app is built with ironclad security measures?</h2>
            <p>Finance firms lose approximately <a href='https://www.ibm.com/reports/data-breach' target="_blank">$5.9 million</a> per data breach, 28% higher than the global average – IBM.</p>
            <Button text="Get Free Security Assessment" onClick={() => navigate('/contact')} />
          </div>
        </div>
      </Container>
    </IroncladSecurityMeasuresWrapper>
  )
}

export default IroncladSecurityMeasures
