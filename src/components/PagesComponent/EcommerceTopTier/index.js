import React from 'react';

import Container from '../../UiComponent/Container';

import { EcommerceTopTierWrapper } from './style';
import { Col, Row } from 'react-bootstrap';


const EcommerceTopTier = () => {

  return (
    <EcommerceTopTierWrapper>
      <Container>
        <div className='header'>
          <h2>Power of top-tier E-commerce technology — now at your disposal</h2>
          <p className='paragraph'>Our e-commerce development experts are well-versed in the industry's leading tools needed to drive the transition from bricks to clicks with expertise and precision.</p>
        </div>
        <Row className='g-4'>
          <Col lg={6}>
            <div className='box'>
              <div className='box-header'>
                <img src='/ecom-tech.svg' loading='lazy' height={40} width={40} />
                <h3 className='text-h4 box-heading'>Technology</h3>
              </div>
              <div className='box-body'>
                <h4 className='text-h5'>AR/VR</h4>
                <p>Virtually try on clothes, see furniture in your home before you buy</p>
                <h4 className='text-h5'>Livestream commerce</h4>
                <p>Real-time product demonstrations, interactive engagement, influencer collaborations</p>
                <h4 className='text-h5'>Voice commerce</h4>
                <p>Simplify adding items to a shopping list or placing food delivery orders</p>
                <h4 className='text-h5'>M-commerce</h4>
                <p>Browse and purchase products directly from your smartphones</p>
                <h4 className='text-h5'>AI/ML</h4>
                <p className='mb-0'>Personalize product recommendations, optimize pricing strategies, improve customer service, optimize inventory management, demand forecasting and route optimization</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className='box-wrapper gap-4'>
              <div className='box'>
                <div className='box-header'>
                  <img src='/ecommerce-platform.svg' loading='lazy' height={40} width={40} />
                  <h3 className='text-h4 box-heading'> Platforms</h3>
                </div>
                <div className='box-body'>
                  <h4 className='text-h5'>Shopify</h4>
                  <h4 className='text-h5'>Commerce Cloud</h4>
                  <h4 className='text-h5'>Magento</h4>
                </div>
              </div>
              <div className='box'>
                <div className='box-header'>
                  <img src='/3rd-party-integration.svg' loading='lazy' height={40} width={40} />
                  <h3 className='text-h4 box-heading'>3rd party integration</h3>
                </div>
                <div className='box-body'>
                  <h4 className='text-h5'>Google Maps</h4>
                  <h4 className='text-h5'>Multimedia APIs</h4>
                  <h4 className='text-h5'>Payment gateways</h4>
                  <h4 className='text-h5'>Flash chart components</h4>
                  <h4 className='text-h5'>Social networks</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </EcommerceTopTierWrapper>
  )
}

export default EcommerceTopTier
