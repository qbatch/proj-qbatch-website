import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Slider from 'react-slick'

import Container from '../../UiComponent/Container';
import { eventsImageGroups, eventsMobileImgs } from '../../../constants';

import PreviousEventsWrapper from './style';

const Index = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <PreviousEventsWrapper>
      <Container>
        <h2 className='color-primary text-center'>Flashbacks From Previous Events</h2>
        <div className='d-md-block d-none'>
          <Slider {...settings}>
            {eventsImageGroups.map((group, ind) => (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 320: 3 }}
                key={ind}
              >
                <Masonry gutter='8px'>
                  {group.map((image, ind) => (
                    <div key={`${ind}-${image.id}`} className={`gallary-img ${image.id === 5 ? 'd-none' : ''}`}>
                      <img src={image.src} alt={image.alt} loading='lazy' className='w-100 card-img' />
                      <div className='gallary-heading'>
                        <span className='text-h3'>{image.title}</span>
                        <div className='d-flex align-items-center gap-4 event-details'>
                          <div className='d-flex align-items-center gap-2'>
                            <img src={image.flag} alt={image.country} title={image.country} loading='lazy' width={28} height={18} />
                            <span>{image.country}</span>
                          </div>
                          <div className='d-flex align-items-center gap-2'>
                            <img src='/calendar-white.svg' alt={image.date} title={image.date} loading='lazy' />
                            <span>{image.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            ))}
          </Slider>
        </div>
        <div className='d-md-none d-block'>
          <Slider {...settings}>
            {eventsMobileImgs.map((slide) => (
              <div key={slide.id}>
                <img src={slide.imageUrl} alt={`Slide ${slide.id}`} style={{ width: "100%", height: "auto" }} />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </PreviousEventsWrapper>
  )
}

export default Index;
