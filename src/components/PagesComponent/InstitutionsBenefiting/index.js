import React from 'react';

import Container from '../../UiComponent/Container';

import { InstitutionsBenefitingWrapper } from './style';


const InstitutionsBenefiting = ({ heading, desc, data1, data2, imgSrc, className }) => {

  return (
    <InstitutionsBenefitingWrapper className={className}>
      <Container>
        <h2>{heading}</h2>
        <p>{desc}</p>
        <div className='section'>
          <div className='item'>
            <ul className='child'>
              {data1.map((item, index) => (
                <li key={index}>{item.text}</li>
              ))}
            </ul>
            <ul className='child'>
              {data2.map((item, index) => (
                <li key={index}>{item.text}</li>
              ))}
            </ul>
          </div>
          <div className='item item-2'>
            <img src={imgSrc} alt="institutions-benefiting" />
          </div>
        </div>
      </Container>
    </InstitutionsBenefitingWrapper>
  )
}

export default InstitutionsBenefiting
