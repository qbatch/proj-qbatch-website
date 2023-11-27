import React from 'react';

import Container from '../../UiComponent/Container';
import PrimaryButton from "../../UiComponent/PrimaryButton";

import InboxWrapper from './style';

const index = () => {
  return (
    <InboxWrapper>
      <Container>
        <h2 className='text-h3'>Get the top stories like these delivered to your inbox</h2>
        <div className='subscribe-email'>
          <img src='/email.svg' alt='email' />
          <input type='email' placeholder='Email Address' />
          <PrimaryButton text="Subscribe" fontSize="16px" />
        </div>
      </Container>
    </InboxWrapper>
  )
}

export default index;
