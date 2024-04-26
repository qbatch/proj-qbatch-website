import React from 'react'
import Slider from 'react-slick'
import Container from '../Container'
import Divider from '../Divider'
import SliderWrapper from './style'
const Index = (props) => {
  const { data, align, heading, paragraph, width, height, seconedHeading, maxWidth, className } = props
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 9000,
  }
  return (
    <>
      <Container>
        <SliderWrapper maxWidth={maxWidth} className={className}>
          <div className={`upper-heading  text-${align || 'left'}`}>
            <h2>{heading}</h2>
            {seconedHeading && <h4>{seconedHeading}</h4>}
            <p className='paragraph'>{paragraph}</p>
          </div>
          <div className="slider-width">
            <Slider {...settings}>
              {data.map((data, i) => {
                return (
                  <div className="d-flex align-items-center justify-content-center make-responsive gap-sm-5 gap-3 mt-sm-5 mb-sm-5 mb-4">
                    <img width={width || ''} height={height || ''} src={data.image} />
                    <div class="slider-data">
                      <h3 className="title">{data.title}</h3>
                      <p className="content">{data.content}</p>
                      {data.list && (
                        <ul>
                          {data.list.map((list) => (
                            <li>{list}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </SliderWrapper>
      </Container>
      <Divider />
    </>
  )
}
export default Index
