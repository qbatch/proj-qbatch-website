import React from 'react';
import IdeaValidtionWrapper from './style';
import Container from '../../UiComponent/Container';

const index = () => {
  return (
    <IdeaValidtionWrapper>
      <Container>
        <div className='section-head'>
          <h2 className='heading text-h2'>Your idea is validated in three ways. How would you like to get it checked?</h2>
          <p>Proof of Concept: Why and how the idea is good? This is validated through a theoretical framework.</p>
        </div>
      </Container>
    </IdeaValidtionWrapper>
  );
};

export default index;