import React from 'react';
import { HealthcareAppDevelopmentWrapper } from './style';
import Container from '../../UiComponent/Container';
import Slider from 'react-slick';
import { HealthcareAppDevelopmentCards } from '../../../constants';

const HealthcareAppDevelopment = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <HealthcareAppDevelopmentWrapper>
      <Container>
        <h2>Healthcare App Development: Powering Patients, Providers, and the System</h2>
        <p>We develop a wide range of high-performing healthcare apps to integrate seamlessly into the healthcare ecosystem. Our extensive experience working with various stakeholders (doctors, patients, pharmacies, etc.) ensures error-free, customized solutions.</p>
        <div className='cards'>
          {HealthcareAppDevelopmentCards.map((card, cardIndex) => (
            <div className='card' key={cardIndex}>
              <img src={card.imgSrc} alt={card.title} />
              <h3>{card.title}</h3>
              <ul>
                {card.listItems.map((item, liIndex) => (
                  <li key={liIndex}>
                    <img src="/green-check.svg" alt="check" />
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='card-for-mobile'>
          <Slider {...settings}>
            {HealthcareAppDevelopmentCards.map((card, cardIndex) => (
              <div key={cardIndex} className='card'>
                <img src={card.imgSrc} alt={card.title} />
                <h3>{card.title}</h3>
                <ul>
                  {card.listItems.map((item, liIndex) => (
                    <li key={liIndex}>
                      <img src="/green-check.svg" alt="check" />
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </HealthcareAppDevelopmentWrapper>
  );
};

export default HealthcareAppDevelopment;
