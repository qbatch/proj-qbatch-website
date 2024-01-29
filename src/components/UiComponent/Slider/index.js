import React from 'react'
import Slider from 'react-slick'
import Container from '../Container'
import Divider from '../Divider'
import SliderWrapper from './style'
const Index = (props) => {
  const { data, align, heading, paragraph, width } = props
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  }
  return (
    <>
      <Container>
        <SliderWrapper>
          <div className={`upper-heading  text-${align || 'left'}`}>
            <h2>{heading}</h2>
            <p>{paragraph}</p>
          </div>
          <div className="slider-width">
          <Slider {...settings}>
            {data.map((data, i) => {
              return (
                <div className="d-flex align-items-center justify-content-center make-responsive gap-4 my-5">
                  <img width={width || ''} src={data.image} alt={data.title} />
                  <div class="slider-data">
                    <div className="title">{data.title}</div>
                    <div className="content">{data.content}</div>
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
