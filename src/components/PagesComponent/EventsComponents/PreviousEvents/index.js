import React from 'react';
import PreviousEventsWrapper from './style';
import Container from '../../../UiComponent/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PreviousEvents = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1900,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <PreviousEventsWrapper>
      <Container>
        <div className='section-header'>
          <h2 className='heading text-h2'>Flashbacks from previous events</h2>
          {/* <p className='paragraph'>Add media from different events, pictures mostly with events names and years showing on hover</p> */}
        </div>
      </Container>

      <div className='main-content'>
        <Slider {...settings}>
          <div className='slide'>
            <img src="/gallery-img-1.jpg" alt="Image 1" />
          </div>
          <div className='slide'>
            <img src="/gallery-img-2.webp" alt="Image 2" />
          </div>
          <div className='slide'>
            <img src="/gallery-img-3.jpg" alt="Image 3" />
          </div>
          <div className='slide'>
            <img src="/gallery-img-4.jpeg" alt="Image 4" />
          </div>
          <div className='slide'>
            <img src="/gallery-img-5.webp" alt="Image 5" />
          </div>
          <div className='slide'>
            <img src="/gallery-img-6.webp" alt="Image 6" />
          </div>
          <div className='slide'>
            <img src="/gallery-img-7.webp" alt="Image 7" />
          </div>
          {/* Add more images as needed */}
        </Slider>
        </div>
    </PreviousEventsWrapper>
  );
};

export default PreviousEvents;