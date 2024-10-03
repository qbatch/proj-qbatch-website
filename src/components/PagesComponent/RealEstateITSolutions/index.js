import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';

import Container from '../../UiComponent/Container';
import { RealEstateITSolutionsData } from '../../../constants';

import ITSolutionsWrapper from './style';

const SolutionBox = ({ item }) => (
  <div className='solutions-box'>
    <img src={item.img} alt={item.heading} title={item.heading} loading='lazy' />
    <div>
      <h3 className='text-h4'>{item.heading}</h3>
      <ul>
        {item.list.map((list, ind) => (
          <li key={ind}>{list}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <ITSolutionsWrapper>
      <Container>
        <div className='solutions-heading'>
          <h2>Full Suite of Rest Estate IT Solutions</h2>
          <p>Let’s help you develop your perfect BEMS, IWMS, ConTech, or other PropTech solutions with our real estate software development company. We bring your ideas to life with personalized service and tailored, cutting-edge solutions.</p>
        </div>
        <Row className='d-lg-flex d-none'>
          {RealEstateITSolutionsData.map((item, ind) => (
            <Col xl={4} lg={6} className='solutions-col' key={ind}>
              <SolutionBox item={item} />
            </Col>
          ))}
        </Row>
        <Row className='d-lg-none d-block'>
          <Slider {...settings}>
            {RealEstateITSolutionsData.map((item, ind) => (
              <Col sm={12} className='solutions-col equal-height-card' key={ind}>
                <SolutionBox item={item} />
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </ITSolutionsWrapper>
  );
};

export default Index;
