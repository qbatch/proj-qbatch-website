import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import { Player, BigPlayButton, LoadingSpinner } from "video-react";

import ArrowLeftIcon from "../../../assets/images/icons/arrow-left-small.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-small.svg";

import ProvenExperienceWrapper from "./style";

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

  const data = useStaticQuery(graphql`
    query testimonialsQuery {
      allStrapiContactUs {
        nodes {
          testimonials {
            clientName
            feedback
            agencyName
            clientImg {
              localFile {
                url
              }
            }
          }
        }
      }
    }
    `);
    const testimonialsData = data.allStrapiContactUs.nodes[0].testimonials;

  return (
    <ProvenExperienceWrapper>
      <div className="section-slider">
        <Carousel responsive={responsive} arrows={false} ref={carousel1Ref} swipeable={false} draggable={false}>
          {testimonialsData.map((item, ind) => (
            <div className="testimonial-wrapper" key={ind}>
              <img className="client-image" src={item.clientImg.localFile.url} alt="client" />
              <p className="testimonial-text">{item.feedback}</p>
              {/* <Player playsInline src={item.projectVideo}>
                  <BigPlayButton position="center" />
                  <LoadingSpinner />
                </Player> */}
            </div>
          ))}
        </Carousel>
        <div className="bottom-slider">
          <Carousel responsive={responsiveTitle} arrows={false} ref={carousel2Ref} swipeable={false} draggable={false}>
            {testimonialsData.map((item, ind) => (
              <div className="testimonial-title" key={ind}>
                <div className="inner-text">
                  <h3 className="text-h4 mb-0">{item.clientName}</h3>
                  <p>{item.agencyName}</p>
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
                {testimonialsData.length < 10 && 0}
                {testimonialsData.length}
              </span>
            </span>
            <ArrowRightIcon
              onClick={() => {
                handleButtonClickNext()
                setCurrentInd(currentInd === testimonialsData.length ? currentInd : currentInd + 1)
              }}
            />
          </div>
        </div>
      </div>
    </ProvenExperienceWrapper>
  )
};

export default Index;
