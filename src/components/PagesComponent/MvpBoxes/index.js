import React, { lazy } from 'react';
import { Col, Row } from 'react-bootstrap';

import MvpBoxesWrapper from './style';

const Container = lazy(() => import('../../UiComponent/Container'));

const index = ({ boxData, heading, paragraph }) => {
  return (
    <MvpBoxesWrapper>
       <Container>
        <h2 className='heading'>{heading}</h2>
        {paragraph && <p className='paragraph'>{paragraph}</p>}
        <Row>
          {boxData.map((data, index) => (
            <Col key={index} xl={3} md={6}>
              <div className='inner-box'>
                <h3 className='text-h4 inner-heading'>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </MvpBoxesWrapper>
  );
};

export default index;
