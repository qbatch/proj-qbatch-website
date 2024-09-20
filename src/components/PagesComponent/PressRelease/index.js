import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';
import Button from '../../UiComponent/Button';
import { pressReleaseData } from '../../../constants';

import PressReleaseWrapper from './style';

const Index = () => {
  return (
    <PressReleaseWrapper>
      <Container>
        <div className='press-heading'>
          <h2 className="color-primary">Press Releases</h2>
          <p>Stay informed with the latest news and updates from Qbatch.</p>
        </div>
        <Row>
          {pressReleaseData.map((item, ind) => (
            <Col lg={4} key={ind}>
              <div className='press-box'>
                <h3 className='text-h5'>{item.text}</h3>
                <Button text='Read More' />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </PressReleaseWrapper>
  )
}

export default Index;
