import React from 'react';
import WebappBanenrWrapper from './style';
import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container/index";
const index = () => {
  return (
    <>
      <WebappBanenrWrapper>
        <Container>
          <div className='banner-headings'>
            <h1 className='main-heading'>Custom Web Application Development Company </h1>
            <h2>If You Think Web Apps Are Old-Fashioned. Think Again.</h2>
            <p>88% of consumers use computers to research products and services before making a purchase. Don’t leave your potential customers confused, instead amuse them with a stunning web appearance!</p>
          </div>
          <div className='banner-button'>
            <Button text="Let’s Start Building" className="primary-btn" />
          </div>
        </Container>
      </WebappBanenrWrapper>
    </>
  );
};

export default index;