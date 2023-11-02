import React from 'react';
import WebappBanenrWrapper from './style';
import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container/index";
const index = () => {
  return (
    <>
      <WebappBanenrWrapper>
        <Container>
          <div className='banner-content'>
            <p className='text-h3 sub-heading'>Custom Web Application Development Company </p>
            <div className='banner-inner-wrapper'>
              <div className='text-wrapper'>
                <h1 className='heading'>If You Think Web Apps Are Old-Fashioned.
                </h1>
                <p className='paragraph'>
                  88% of consumers use computers to research products
                  and services before making a purchase. So, don’t leave your potential customers confused!
                </p>
              </div>
              <div className='img-wrapper'>
                <img src='/think-again.svg' alt='think again'/>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <Button text="Kickoff Your Project" className="secondary-btn" />
          </div>
        </Container>
      </WebappBanenrWrapper>
    </>
  );
};

export default index;