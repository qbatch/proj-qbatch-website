import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { revenueData } from "../../../constants";
import Container from "../../UiComponent/Container";

import RevenueWrapper from "./style";

const Index = () => {
  const sliderRef2 = useRef(null);
  const scrollRef2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSectionStart = () => {
    if (scrollRef2.current) {
      const sectionTop = scrollRef2.current.offsetTop;
      const sectionTopCalc = sectionTop - 80;
      window.scrollTo({
        top: sectionTopCalc,
        behavior: "smooth",
      });
    }
  };
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
  };

  useEffect(() => {
    const handleMouseWheel = (e) => {
      const isAtFirstSlide = activeIndex === 0;
      const isAtLastSlide = activeIndex === revenueData.length - 1;

      if (e.deltaY > 0) {
        if (!isAtLastSlide) {
          e.preventDefault();
          sliderRef2.current.slickNext();
          scrollToSectionStart();
          document
            .getElementById("revenue-trigger")
            .classList.add("section-sticky");
        } else {
          document.body.style.overflow = "auto";
          document
            .getElementById("revenue-trigger")
            .classList.remove("section-sticky");
        }
      } else if (e.deltaY < 0) {
        if (isAtFirstSlide) {
          document.body.style.overflow = "auto";
          document
            .getElementById("revenue-trigger")
            .classList.remove("section-sticky");
        } else {
          e.preventDefault();
          sliderRef2.current.slickPrev();
          scrollToSectionStart();
          document
            .getElementById("revenue-trigger")
            .classList.add("section-sticky");
        }
      }
    };

    // Add event listener for mousewheel
    const sliderElement = document.querySelector(".stage-slider-revenue");
    sliderElement.addEventListener("wheel", handleMouseWheel);

    return () => {
      // Remove event listener when the component unmounts
      sliderElement.removeEventListener("wheel", handleMouseWheel);
    };
  }, [activeIndex]);
  return (
    <RevenueWrapper
      id="revenue-trigger"
      ref={scrollRef2}
      className="stage-slider-revenue"
    >
      <Container>
        <div className="revenue-heading">
          <h2>To all the sellers, it’s time to triple your revenue!</h2>
          <p>We tap multiple selling verticals not limited to</p>
        </div>
        <div className="slider-section d-flex align-items-center">
          <div className="slide-counter">
            <span>{activeIndex + 1}</span>
            <span></span>
            <span>{revenueData.length}</span>
          </div>
          <Slider {...sliderSettings} ref={sliderRef2}>
            {revenueData?.map((item, index) => (
              <div
                key={index}
                className="slider-data d-flex align-items-center"
              >
                <div>
                  <img src={item.img} alt="logo" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <h4>{item.description}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </RevenueWrapper>
  );
};

export default Index;
