import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Slider from 'react-slick'

import Container from '../../UiComponent/Container';

import PreviousEventsWrapper from './style';

const Index = () => {
  const imageGroups = [
    [
      { id: 1, src: '/event-img-1.png', alt: 'Image1' },
      { id: 2, src: '/event-img-3.png', alt: 'Image2' },
      { id: 3, src: '/event-img-4.png', alt: 'Image3' },
      { id: 4, src: '/event-img-2.png', alt: 'Image4' },
      { id: 5, src: '/event-img-1.png', alt: 'Image5' },
      { id: 6, src: '/event-img-5.png', alt: 'Image6' },
    ],
    [
      { id: 1, src: '/event-img-6.png', alt: 'Image1' },
      { id: 2, src: '/event-img-8.png', alt: 'Image2' },
      { id: 3, src: '/event-img-7.png', alt: 'Image3' },
      { id: 4, src: '/event-img-9.png', alt: 'Image4' },
      { id: 5, src: '/event-img-1.png', alt: 'Image5' },
      { id: 6, src: '/event-img-10.png', alt: 'Image6' },
    ],
  ];

  const mobileScreen = [
    { id: 1, imageUrl: "/mobile-event-1.png" },
    { id: 2, imageUrl: "/mobile-event-2.png" },
    { id: 3, imageUrl: "/mobile-event-3.png" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <PreviousEventsWrapper>
      <Container>
        <h2 className='color-primary text-center'>Flashbacks From Previous Events</h2>
        <div className='d-md-block d-none'>
          <Slider {...settings}>
            {imageGroups.map((group, ind) => (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 320: 3 }}
                key={ind}
              >
                <Masonry gutter='8px'>
                  {group.map((image) => (
                    <div key={image.id} className={`gallary-img ${image.id === 5 ? 'd-none' : ''}`}>
                      <img src={image.src} alt={image.alt} loading='lazy' className='w-100 card-img' />
                      <div className='gallary-heading'>
                        <h3>Japan IT Week 2023</h3>
                        <div className='d-flex align-items-center gap-4 event-details'>
                          <div className='d-flex align-items-center gap-2'>
                            <img src='/japan-flag.svg' alt='japan' title='japan' loading='lazy' />
                            <span>Tokyo</span>
                          </div>
                          <div className='d-flex align-items-center gap-2'>
                            <img src='/calendar-white.svg' alt='japan' title='japan' loading='lazy' />
                            <span>Feb 2023</span>
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
            {mobileScreen.map((slide) => (
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
