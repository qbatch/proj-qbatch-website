import React from 'react';
import WhatToExpectWrapper from './style';
import Container from '../../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';

const WhatToExpect = ({ paragraph, innerContentData }) => {

  return (
    <WhatToExpectWrapper style={{ backgroundImage: "url(/what-to-expect-bg.svg)" }}>
      <Container>
        <h2 className='heading'>What to expect?</h2>
        <p className='paragraph'>{paragraph}</p>
        <Row className='inner-content'>
          {innerContentData && innerContentData.map((data, index) => (
            <Col lg={4} md={6}>
              <div className='inner-content-box' key={index}>
                  <h3 className='box-content-heading'>{data.heading}</h3>
                  <p className='box-content-paragraph'>{data.paragraph}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </WhatToExpectWrapper>
  );
};

export default WhatToExpect;
