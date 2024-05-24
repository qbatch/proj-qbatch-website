import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { Typewriter } from 'react-simple-typewriter'

import Button from "../../UiComponent/HomeButton/index";
import Container from "../../UiComponent/Container";

import { DedicatedDeveloperWrapper } from "./style";

const Index = () => {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DedicatedDeveloperWrapper>
      <Container>
        <div className="title-portion">
          <h1>
            Software Development & Consultancy <br /> for {' '}
            {width >= 480 ?
              <Typewriter
                words={['Startups', 'Entrepreneurs', 'Enterprise Owners', 'Risk-takers', 'Innovators']}
                loop='infinite'
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            :
              <span>Entrepreneurs</span>
            }
          </h1>
          <h2 className="text-h5 fw-normal">
            200+ enterprises have already garnered great financial results and
            market outreach with our time-tested development flow, error-free
            code quality, and on-time project delivery.
          </h2>
          <div className="text-center d-flex align-items-center justify-content-center">
            <Button
              text="Schedule a Meeting"
              onClick={() => navigate("/contact")}
            />
          </div>
        </div>
      </Container>
    </DedicatedDeveloperWrapper>
  );
};

export default Index;
