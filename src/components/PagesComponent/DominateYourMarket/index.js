import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Container from '../../UiComponent/Container';
import Divider from '../../UiComponent/Divider';

import DominateMarketWrapper from './style';

const Index = () => {

  const marketData = [
    {
      img: '/breaks-location.svg',
      title: 'Breaks location barriers and expands your reach',
    },
    {
      img: '/personalizes-experience.svg',
      title: 'Personalizes experiences for explosive lead generation.',
    },
    {
      img: '/cuts-marketing.svg',
      title: `Cuts marketing costs and boosts your ROI.`,
    },
  ] 

  return (
    <>
      <DominateMarketWrapper>
        <Container>
          <div className="text-center heading-box">
            <h2 className="color-primary">Zillow? No, you can do better! Dominate your market with a custom real estate app that:</h2>
          </div>
          <div className="images-box">
            <Row>
              {marketData.map((list) => {
                return (
                  <Col md={4}>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <img src={list.img} alt={list.title} title={list.title} loading='lazy' />
                      <p>{list.title}</p>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>
        </Container>
      </DominateMarketWrapper>
      <Divider />
    </>
  )
}
export default Index;
