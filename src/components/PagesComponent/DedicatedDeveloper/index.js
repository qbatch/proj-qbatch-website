import React, { useEffect, useRef } from "react";
import Button from "../../UiComponent/HomeButton/index";
import Container from "../../UiComponent/Container";
import { Typewriter } from "react-simple-typewriter";
import { init } from "ityped";
import { navigate } from "gatsby";
import { DedicatedDeveloperWrapper } from "./style";

const Index = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backSpeed: 2000,
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 500,
      showCursor: true,
      cursorChar: "|",
      strings: [
        "Startups",
        "Entrepreneurs",
        "Enterprise Owners",
        "Risk-takers",
        "Innovators",
      ],
    });
  }, []);

  return (
    <DedicatedDeveloperWrapper>
      <Container>
        <div className="title-portion">
          <h1>
            Software Development & <br /> Consultancy for
            <span ref={textRef}/>
          </h1>
          <p>
            200+ enterprises have already garnered great financial results and
            market outreach with our time-tested development flow, error-free
            code quality, and on-time project delivery.
          </p>
          <div className="text-center d-flex align-items-center justify-content-center">
            <Button
              text="Schedule a Meeting"
              onClick={() => navigate("/contact")}
            />
          </div>
        </div>
        <div className="text-center add-space"></div>
      </Container>
    </DedicatedDeveloperWrapper>
  );
};

export default Index;
