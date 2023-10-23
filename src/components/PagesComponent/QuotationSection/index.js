import React from 'react'
import { Container } from 'react-bootstrap'

import Button from '../../UiComponent/Button'
import QuotationSection from './style'

const Index = () => {
  return (
    <QuotationSection>
      <Container>
        <h4 className="text-h2 heading">
          “The first rule of any technology used in a business is that automation applied to an efficient operation will
          magnify the efficiency.  The second is that automation applied to an inefficient operation will magnify the
          inefficiency.”
        </h4>
        <p className="paragraph">— Bill Gates </p>
        <div className="start-project">Start Your Project <img src="/arrow-down.svg" alt="no-arrow" /> </div>
      </Container>
    </QuotationSection>
  )
}

export default Index
