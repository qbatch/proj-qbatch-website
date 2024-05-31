import React from "react";
import Slider from "react-slick";

import Container from "../../UiComponent/Container";
import { ecomLogos } from "../../../constants";

import LogoWrapper from "./style";

const Index = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  };
  return (
    <LogoWrapper>
      <Container>
          <Slider {...settings} className="ecom-logo-slider">
            {ecomLogos.map((logo, ind) => (
              <div className="ecom-logos">
                <img key={ind} src={logo} alt="logo" />
              </div>
            ))}
          </Slider>
      </Container>
    </LogoWrapper>
  );
};

export default Index;
