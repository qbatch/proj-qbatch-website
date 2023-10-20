import React, { useState, useRef } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import { Player, BigPlayButton, LoadingSpinner } from "video-react";

import ProjectIcon from "../../../assets/images/icons/ecom-circle-icon.svg";
import ArrowLeftIcon from "../../../assets/images/icons/arrow-left-small.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-small.svg";

import ProvenExperienceWrapper from "./style";

const projectSlides = [
  {
    clientImage: '/client-1.svg',
    testimonial:
      '“It’s been my pleasure to work with the development team at !batch for the past 3 years ona number of very large and complex web applications. The attention to detail and level of communication has been superior.”',
    title: 'Michael Flanagan',
    subtitle: 'Minmax Industries',
    logo: '/testimonial.svg',
  },
  {
    clientImage: 'valentine.png',
    testimonial:
      '“It was fantastic working with Qbatch. They had a great eye for detail and were able to deliver the requested design with thoroughness and full quality. I look forward to hiring them again for future design work.”',
    title: 'Michael Flanagan',
    title: 'Valentine Nwachukwu',
    subtitle: 'Zaden Technologies',
    logo: '/testimonial.svg',
  },
  {
    clientImage: '/ershad.png',
    testimonial:
      '“One of the most hardworking guys I have ever seen! Will definitely work with Qbatch team in the future!”',
    title: 'Ershad Anari',
    subtitle: 'SecondBind',
    logo: '/testimonial.svg',
  },
  {
    clientImage: '/victor-simon.png',
    testimonial:
      '“Qbatch worked with us for 2 years and their team has become one of the most important members of our team. Very skilful and highly responsible.”',
    title: 'Victor Simon',
    subtitle: 'North Aware',
    logo: '/testimonial.svg',
  },
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1700 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1200 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 0 },
    items: 1,
  },
};

const responsiveTitle = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Index = () => {
  const [currentInd, setCurrentInd] = useState(1);

  const carousel1Ref = useRef(null);
  const carousel2Ref = useRef(null);

  const handleButtonClickPre = () => {
    carousel1Ref.current.previous();
    carousel2Ref.current.previous();
  };

  const handleButtonClickNext = () => {
    carousel1Ref.current.next();
    carousel2Ref.current.next();
  };

  return (
    <ProvenExperienceWrapper>
      <div className="section-slider">
        <Carousel responsive={responsive} arrows={false} ref={carousel1Ref} swipeable={false} draggable={false}>
          {projectSlides.map((item, ind) => (
            <div className="testimonial-wrapper" key={ind}>
              <img className="client-image" src={item.clientImage} />
              <p className="testimonial-text">{item.testimonial}</p>
              {/* <Player playsInline src={item.projectVideo}>
                  <BigPlayButton position="center" />
                  <LoadingSpinner />
                </Player> */}
            </div>
          ))}
        </Carousel>
        <div className="bottom-slider">
          <Carousel responsive={responsiveTitle} arrows={false} ref={carousel2Ref} swipeable={false} draggable={false}>
            {projectSlides.map((item, ind) => (
              <div className="testimonial-title" key={ind}>
                <img className="client-image" src={item.logo} />
                <div className="inner-text">
                  <h3 className="text-h4 mb-0">{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </Carousel>
          <div className="carousel-button-group d-flex align-items-center">
            <ArrowLeftIcon
              onClick={() => {
                handleButtonClickPre()
                setCurrentInd(currentInd === 1 ? 1 : currentInd - 1)
              }}
            />
            <span>
              <span className="fw-bold">
                {currentInd < 10 && 0}
                {currentInd}
              </span>
              <span>/</span>
              <span>
                {projectSlides.length < 10 && 0}
                {projectSlides.length}
              </span>
            </span>
            <ArrowRightIcon
              onClick={() => {
                handleButtonClickNext()
                setCurrentInd(currentInd === projectSlides.length ? currentInd : currentInd + 1)
              }}
            />
          </div>
        </div>
      </div>
    </ProvenExperienceWrapper>
  )
};

export default Index;
