import React, { useRef, useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { Queries } from '../../../constants/queries';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InsightsWrapper from './style';
import Container from '../../UiComponent/Container';
import PrimaryButton from '../../UiComponent/PrimaryButton';
import ArrowLeftIcon from '../../../assets/images/icons/arrow-left-small.svg';
import ArrowRightIcon from '../../../assets/images/icons/arrow-right-small.svg';
import Divider from "../../UiComponent/Divider";
import moment from "moment"

const Index = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const blogArticle = Queries();
  const blogData = blogArticle.allStrapiArticle.nodes;
  const ctoBlogData = blogData.filter((item) => item.category?.categoryName === "Software Development");

  useEffect(() => {
    if (sliderRef.current) {
      setTotalSlides(sliderRef.current.props.children.length);
    }
  }, []);

  // Responsive settings for the slider
  const responsiveSettings = [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const settings = {
    slidesToShow: 3, // Default number of slides to show
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
              <div className="insight-card h-100" key={index}>
                <div className="inner h-100">
                  <img className="card-img" src={card.blogImg?.localFile.url} alt={card.blogTitle} />
                  <div className="inner-content">
                    <div className='d-flex justify-content-between'>
                      <div className='badge'>Blog</div>
                      <div className='date'>{moment(card.updatedAt).format('DD/MM/YYYY')}</div>
                    </div>
                    <h3 className="heading text-h4">{card.blogTitle}</h3>
                    <PrimaryButton
                      borderbottom
                      text="Explore More"
                      onClick={() => {
                        navigate(`/blog${card.seo.slug}`, {
                          state: { blogId: card.id },
                        });
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
  );
};

export default Index;
