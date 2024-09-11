import React from 'react';
import { HealthcareAppDevelopmentWrapper } from './style';
import Container from '../../UiComponent/Container';
import { HealthcareAppDevelopmentCards } from '../../../constants';

const HealthcareAppDevelopment = () => {

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
      </Container>
    </HealthcareAppDevelopmentWrapper>
  );
};

export default HealthcareAppDevelopment;
