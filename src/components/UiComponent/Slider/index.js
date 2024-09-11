import React from 'react'
import Slider from 'react-slick'
import Container from '../Container'
import Divider from '../Divider'
import SliderWrapper from './style'
import Button from "../../UiComponent/Button"
import { navigate } from 'gatsby'
const Index = (props) => {
  const { data, align, heading, paragraph, subParagraph, width, height, seconedHeading, maxWidth, className, btnClass, btnText,dividerClass } = props
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
            {subParagraph ? <p className='paragraph sub-paragraph'>{subParagraph}</p> : null}
          </div>
          <div className="slider-width">
            <Slider {...settings}>
              {data.map((data, i) => {
                return (
                  <div className="d-flex align-items-center justify-content-center make-responsive gap-sm-5 gap-3 mt-0 mb-4" key={i}>
                    <img width={width || ''} height={height || ''} src={data.image} alt={data.title} title={data.title} loading='lazy' />
                    <div class="slider-data">
                      <h3 className="title text-h4">{data.title}</h3>
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
          {btnText && (
            <div className='d-block pt-5'>
              <Button text={btnText} onClick={() => navigate('/contact')}  btnType="submit" className={btnClass} />
            </div>
          )}
        </SliderWrapper>
      </Container>
      <Divider className={dividerClass}/>
    </>
  )
}
export default Index
