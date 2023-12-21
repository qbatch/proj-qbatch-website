import React, { useCallback, useEffect, useState } from "react";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import TechnicalGuidanceWrapper from "./style";

const Index = (props) => {
  const { data, heading, span, desc, className, isButton } = props;
  const isBrowser = typeof window !== "undefined";
  const [windowWidth, setWindowWidth] = useState(
    isBrowser ? window.innerWidth : 0
  );
  const [horLength, setHorLength] = useState(0);
  const [distFromTop, setDistFromTop] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    if (!isBrowser) return false;

    const updateWindowSize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, [isBrowser]);

  useEffect(() => {
    const elementWrapper = document.querySelector(".element-wrapper");
    const horizontalSection = document.querySelector(".horizontal-section");

    if (elementWrapper && horizontalSection) {
      setHorLength(elementWrapper.scrollWidth);
      setDistFromTop(horizontalSection.offsetTop);
      setScrollDistance(distFromTop + horLength - windowWidth);
      horizontalSection.style.height = horLength + "px";
    }
  }, [windowWidth, horLength, distFromTop]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
      const translateX = scrollTop - distFromTop;
      document.querySelector(
        ".element-wrapper"
      ).style.transform = `translateX(-${translateX}px)`;
    }
  }, [distFromTop, scrollDistance]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <TechnicalGuidanceWrapper className={className}>
      <div className="horizontal-section">
        <div className="sticky-wrapper">
          <Container>
            <div className="d-flex align-items-start justify-content-between flex-wrap guidance-heading">
              <h2>
                {heading}
                <span>{span}</span>
              </h2>
              {desc && <p>{desc}</p>}
              {isButton && (
                <div className="mt-2">
                  <Button text="Let’s Get Started" />
                </div>
              )}
            </div>
          </Container>
          <div className="element-wrapper">
            {data.map((data, ind) => (
              <div className="guidance-card" key={ind}>
                <img src={data.icon} alt="card icon" />
                <p>{data.desc}</p>
              </div>
            ))}
            <div className="guidance-card"></div>
          </div>
        </div>
      </div>
    </TechnicalGuidanceWrapper>
  );
};

export default Index;
