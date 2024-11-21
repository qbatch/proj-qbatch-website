import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import { navigate } from 'gatsby';

import Container from '../../UiComponent/Container';
import Button from '../../UiComponent/Button';

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

const Index = ({ heading, desc, data, col, isBtn, btnText, className }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const uniqueData = data.filter((item, index, self) =>
    index === self.findIndex((t) => t.heading === item.heading)
  );

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
    <ITSolutionsWrapper className={className}>
      <Container>
        <div className='solutions-heading'>
          <h2>{heading}</h2>
          <p>{desc}</p>
        </div>
        {!isMobile ? (
          <Row className='d-lg-flex d-none'>
            {uniqueData.map((item, ind) => (
              <Col xl={col || 4} lg={6} className='solutions-col' key={ind}>
                <SolutionBox item={item} />
              </Col>
            ))}
          </Row>
        ) : (
          <Row className='d-lg-none d-block'>
            <Slider {...settings}>
              {uniqueData.map((item, ind) => (
                <Col sm={12} className='solutions-col equal-height-card' key={ind}>
                  <SolutionBox item={item} />
                </Col>
              ))}
            </Slider>
          </Row>
        )}
        {isBtn &&
          <div className='btn-margin d-flex justify-content-center'>
            <Button text={btnText} onClick={() => navigate('/contact')} />
          </div>
        }
      </Container>
    </ITSolutionsWrapper>
  );
};

export default Index;
