import React from 'react';
import { Container } from 'react-bootstrap';

import Button from '../../UiComponent/Button';

import QuotationSection from './style';

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
        <div className='d-flex align-items-center justify-content-center'>
        <Button text='Start Your Project' className="secondary-btn" />
        </div>
      </Container>
    </QuotationSection>
  )
}

export default Index
