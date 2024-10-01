import React from 'react';
import Container from '../../UiComponent/Container';
import EdTechPotentialWrapper from './style';

const EdTechPotential = ({ heading, subHeading, data }) => {
  return (
    <EdTechPotentialWrapper>
      <Container>
        <h2>{heading}</h2>
        {subHeading && <p className='sub-heading'>{subHeading}</p>}
        <div className='items-wrapper'>
          {data.map((item, index) => (
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
