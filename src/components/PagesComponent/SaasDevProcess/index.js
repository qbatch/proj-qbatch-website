import React from 'react';
import SaasDevProcessWrapper from './style';
import Container from '../../UiComponent/Container';

const SaasDevProcess = () => {
  return (
    <SaasDevProcessWrapper>
      <Container>
        <h2 className='text-h2 heading'>Our Saas Software Development <span className='underline'>Process</span></h2>
        <img className='diagram-img d-lg-block d-none' src='/saas-dev-diagram.svg' alt='saas-dev-diagram' />
        <img className='diagram-img d-lg-none d-block' src='/diagram-mobile.svg' alt='saas-dev-diagram' />
        <img className='diagram-bg' src='/diagram-bg.svg' alt='vector' />
      </Container>
    </SaasDevProcessWrapper>
  );
};

export default SaasDevProcess;
