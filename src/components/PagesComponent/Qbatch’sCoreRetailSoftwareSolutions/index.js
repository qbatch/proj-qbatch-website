import React from 'react';
import { navigate } from 'gatsby';
import Slider from 'react-slick';

import Container from '../../UiComponent/Container';
import Button from '../../UiComponent/Button';

import { coreRetailData } from '../../../constants';

import { QbatchCoreRetailSoftwareSolutionsWrapper } from './style';

const QbatchCoreRetailSoftwareSolutions = () => {


  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <QbatchCoreRetailSoftwareSolutionsWrapper>
      <Container>
        <h2>Qbatch’s Core Retail Software Solutions</h2>
        <p>In the competitive retail landscape, leveraging the right software solutions can significantly enhance operational efficiency and customer satisfaction. Here are the core retail software solutions that can transform your business:</p>
        
        <div className='cards-wrapper desktop'>
          {coreRetailData.map((item, index) => (
            <div key={index} className='card-item'>
              <h3>{item.heading}</h3>
              <ul>
                {item.content.map((contentItem, contentIndex) => (
                  <li key={contentIndex}>{contentItem.text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className='mobile-responsive'>
          <Slider {...sliderSettings}>
            {coreRetailData.map((item, index) => (
              <div key={index} className='card-item'>
                <p className='custom-h3'>{item.heading}</p>
                <ul>
                  {item.content.map((contentItem, contentIndex) => (
                    <li key={contentIndex}>{contentItem.text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Slider>
        </div>
        <Button className="button-wrapper" onClick={() => navigate('/contact')} text="Build On-Demand Retail Solution" />
      </Container>
    </QbatchCoreRetailSoftwareSolutionsWrapper>
  );
};

export default QbatchCoreRetailSoftwareSolutions;
