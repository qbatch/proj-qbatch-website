import React from 'react';
import { navigate } from 'gatsby'
import WebappBanenrWrapper from './style';
import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container/index";
const index = () => {
  return (
    <>
      <WebappBanenrWrapper>
        <Container>
          <div className="banner-content">
            <h1  className="text-h3 sub-heading">Custom Web Application Development Company </h1>
            <div className="banner-inner-wrapper">
              <div className="text-wrapper">
                <h2 className="heading text-h1">If You Think Web Apps Are Old-Fashioned.</h2>
                <p className="paragraph">
                  88% of consumers use computers to research products and services before making a purchase. So, don’t
                  leave your potential customers confused!
                </p>
              </div>
              <div className="img-wrapper">
                <img src="/think-again.svg" alt="think again" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Button onClick={() => navigate('/contact')} text="Kickoff Your Project" className="secondary-btn" />
          </div>
        </Container>
      </WebappBanenrWrapper>
    </>
  )
};

export default index;