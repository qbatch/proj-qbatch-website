import React, { useState, useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const Index = () => {
  const [currentInd, setCurrentInd] = useState(1);
  const [loadedIndexes, setLoadedIndexes] = useState([0]);

  const carousel1Ref = useRef(null);

  const handleButtonClickPre = () => {
    carousel1Ref.current.previous();
    setCurrentInd((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const handleButtonClickNext = () => {
    carousel1Ref.current.next();
    setCurrentInd((prev) => (prev === testimonialsData.length ? prev : prev + 1));
  };

  const data = useStaticQuery(graphql`
    query TestimonialsQuery {
      allStrapiTestimonial {
        nodes {
          clientName
          feedback
          agencyName
          clientImg {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    }
  `);
  const testimonialsData = data.allStrapiTestimonial.nodes;

  useEffect(() => {
    const newLoadedIndexes = new Set(loadedIndexes);
    newLoadedIndexes.add(currentInd - 1);
    newLoadedIndexes.add(currentInd);
    newLoadedIndexes.add(currentInd + 1);
    setLoadedIndexes(Array.from(newLoadedIndexes));
  }, [currentInd]);

  return (
    <ProvenExperienceWrapper>
      <div className="section-slider">
        <Carousel responsive={responsive} arrows={false} ref={carousel1Ref} swipeable={false} draggable={false}>
          {testimonialsData.map((item, ind) => {
            const testimonialImage = getImage(item.clientImg?.localFile?.childImageSharp?.gatsbyImageData);
            return (
              loadedIndexes.includes(ind) && (
                <div className="testimonial-wrapper" key={ind}>
                  <div className="d-flex align-items-center gap-3">
                    <GatsbyImage
                      image={testimonialImage}
                      alt={`Client ${ind + 1}`}
                      className="client-image"
                      loading="lazy"
                    />
                    <div className="testimonial-title">
                      <h4 className="mb-0">{item.clientName}</h4>
                      <p>{item.agencyName}</p>
                    </div>
                  </div>
                  <p className="testimonial-text">{item.feedback}</p>
                </div>
              )
            )
          })}
        </Carousel>
        <div className="bottom-slider">
          <div className="carousel-button-group d-flex align-items-center">
            <ArrowLeftIcon
              onClick={handleButtonClickPre}
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
              onClick={handleButtonClickNext}
            />
          </div>
        </div>
      </div>
    </ProvenExperienceWrapper>
  );
};

export default Index;
