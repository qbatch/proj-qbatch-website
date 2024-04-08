import React, { useRef, useEffect } from 'react';
import { navigate } from 'gatsby';
import EventsBannerWrapper from './style';
import ArrowRight from '../../../assets/images/icons/right-icon-button.svg';

const Index = ({ eventLogo1, eventName1, eventBoothNo1, eventDate1, eventLogo2, eventName2, eventBoothNo2, eventDate2 }) => {
  const sliderRef = useRef(null);
  const scrollInterval = useRef(null);

  useEffect(() => {
    const startAutoScroll = () => {
      scrollInterval.current = setInterval(() => {
        if (sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >= sliderRef.current.scrollWidth) {
          // If at the end, reset to the beginning
          sliderRef.current.scrollLeft = 0;
        } else {
          sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
        }
      }, 3000); // Change interval duration as needed (e.g., every 5 seconds)
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval.current);
    };

    // Start auto scrolling when component mounts
    startAutoScroll();

    // Stop auto scrolling when component unmounts
    return () => {
      stopAutoScroll();
    };
  }, []);

  const handlePrev = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const handleNext = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  return (
    <EventsBannerWrapper>
      <div className='slider-container' ref={sliderRef}>
        <div className='box-left box'>
          <img className='flag' src='/uk-flag.svg' />
          <div className='box-inner-wrapper'>
            <div className='box-inner'>
              <div className='event-name'>
                <img src={eventLogo1} alt='event-logo' />
                <h2 className='text-h3 mb-0'>{eventName1}</h2>
              </div>
              <div className='details'>
                <p className='date'>{eventDate1}</p>
                <p className='booth'>Booth No. {eventBoothNo1}</p>
              </div>
            </div>
            <button className='arrow-button' onClick={() => navigate(`/events/white-label-world-expo`)}>
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className='center-box'>
          <span>We are Exhibiting at</span>
        </div>

        <div className='box-right box'>
          <div className='box-inner-wrapper'>
            <div className='box-inner'>
              <div className='event-name'>
                <img src={eventLogo2} alt='event-logo' />
                <h2 className='text-h3 mb-0'>{eventName2}</h2>
              </div>
              <div className='details'>
                <p className='date'>{eventDate2}</p>
                <p className='booth'>Booth No. {eventBoothNo2}</p>
              </div>
            </div>
            <button className='arrow-button' onClick={() => navigate(`/events/prosper-show`)}>
              <ArrowRight />
            </button>
          </div>
          <img className='flag' src='/us-flag.webp' />
        </div>
      </div>

      {/* Slider navigation buttons */}
      <button className='slider-nav prev' onClick={handlePrev}>{'<'}</button>
      <button className='slider-nav next' onClick={handleNext}>{'>'}</button>
    </EventsBannerWrapper>
  );
};

export default Index;
