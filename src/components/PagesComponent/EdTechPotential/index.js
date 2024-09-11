import React from 'react';
import { EdTechPotentialData } from '../../../constants';

import Container from '../../UiComponent/Container';
import EdTechPotentialWrapper from './style';

const EdTechPotential = () => {
  return (
    <EdTechPotentialWrapper>
      <Container>
        <h2>EdTech’s potential is vast but new. There are development challenges but also solutions.</h2>
        <div className='items-wrapper'>
          {EdTechPotentialData.map((item, index) => (
            <div key={index} className='item'>
              <img src={item.image} />
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
