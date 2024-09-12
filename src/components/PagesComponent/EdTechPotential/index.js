import React from 'react';
import Container from '../../UiComponent/Container';
import EdTechPotentialWrapper from './style';
import { EdTechPotentialData } from '../../../constants';

const EdTechPotential = () => {
  return (
    <EdTechPotentialWrapper>
      <Container>
        <h2>Let’s build an accessible, efficient, and secure healthcare future with Qbatch’s technology solution.</h2>
        <div className='items-wrapper'>
          {EdTechPotentialData.map((item, index) => (
            <div key={index} className='item'>
              <img src={item.image} alt={item.image} />
              <div className='item-disc'>
                <h3>{item.title}</h3>
                <p>{item.disc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </EdTechPotentialWrapper>
  );
};

export default EdTechPotential;
