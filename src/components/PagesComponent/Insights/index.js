import React, { useRef, useState, useEffect } from 'react';
import { navigate } from 'gatsby'
import { Queries } from '../../../constants/queries'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InsightsWrapper from './style';
import Container from '../../UiComponent/Container';
import PrimaryButton from '../../UiComponent/PrimaryButton';
import ArrowLeftIcon from '../../../assets/images/icons/arrow-left-small.svg';
import ArrowRightIcon from '../../../assets/images/icons/arrow-right-small.svg';

import Divider from "../../UiComponent/Divider";

const Index = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
   const blogArticle = Queries()
   const blogData = blogArticle.allStrapiArticle.nodes
   const ctoBlogData = blogData.filter((item)=> item.category?.categoryName === "CTO as a Service")
  // Data for the cards

  useEffect(() => {
    if (sliderRef.current) {
      setTotalSlides(sliderRef.current.props.children.length);
    }
  }, []);

   // Responsive settings for the slider
   const responsiveSettings = [
    {
      breakpoint: 1200, // Adjust the breakpoint as needed
      settings: {
        slidesToShow: 2, // Number of slides to show on larger screens
      },
    },
    {
      breakpoint: 992, // Adjust the breakpoint as needed
      settings: {
        slidesToShow: 2, // Number of slides to show on medium-sized screens
      },
    },
    {
      breakpoint: 576, // Adjust the breakpoint as needed
      settings: {
        slidesToShow: 1, // Number of slides to show on smaller screens
      },
    },
  ];
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: false,
    afterChange: (index) => setCurrentSlide(index),
    responsive: responsiveSettings, // Apply responsive settings
  };
  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Function to format slide numbers with leading zeros
  const formatSlideNumber = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  return (
    <>
      <InsightsWrapper>
        <Container>
          <div className="wrapper">
            <div className="carousel-header">
              <h2 className="color-primary">Latest Insights & News</h2>
              <p>We work hard to keep you updated about trending technology and developments from around the world!</p>
            </div>

            <div className="custom-controls">
              <button className="prev-btn" onClick={handlePrevClick}>
                <ArrowLeftIcon />
              </button>
              <div className="slide-counter">
                <span>{formatSlideNumber(currentSlide + 1)}</span>
                <span>/</span>
                <span>{formatSlideNumber(totalSlides)}</span>
              </div>
              <button className="next-btn" onClick={handleNextClick}>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {ctoBlogData.map((card, index) => (
              <div className="insight-card" key={index}>
                <div className="inner">
                  <img className="card-img" src={card.blogImg?.localFile.url} alt={card.blogTitle} />
                  <div className="inner-content">
                    <h3 className="heading">{card.blogTitle}</h3>
                    <PrimaryButton
                      borderbottom
                      text="Explore More"
                      onClick={() => {
                        navigate(`/blog${card.seo.slug}`, {
                          state: { blogId: card.id },
                        })
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </InsightsWrapper>
      <Divider />
    </>
  )
};

export default Index;
