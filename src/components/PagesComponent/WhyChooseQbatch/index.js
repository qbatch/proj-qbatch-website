import React from 'react';
import WhyChooseQbatchWrapper from './style';
import Container from '../../UiComponent/Container';
import { whyChooseQbatchData } from '../../../constants';
import { Row, Col } from 'react-bootstrap';

const style = () => {
  return (
    <>
    <WhyChooseQbatchWrapper>
      <Container>
        <h2 className='heading text-center'>So, Why Choose Qbatch as Your Next Product Development Company?</h2>
        <div className='wrapper'>

        <Row>
            {whyChooseQbatchData.map((data, ind) => (
              <Col lg={4} md={4} xs={6} key={ind} className="achievements-col">
                <img src={data.icon} alt={data.symbol} className="icon" />
                <p className="text-h4 paragraph">{data.desc}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </WhyChooseQbatchWrapper>
    </>
  );
};

export default style;