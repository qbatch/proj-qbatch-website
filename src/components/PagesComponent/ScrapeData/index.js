import React from 'react'
import Container from '../../UiComponent/Container'
import ScrapeData from './style'
const Index = () => {
  const dataProcesss = [
    {
      img: '/your-identify.svg',
      title: 'You Identify',
    },
    {
      img: '/we-scrape.svg',
      title: 'You Identify',
    },
    {
      img: '/you-use.svg',
      title: 'You Identify',
    },
  ]
  const dataProcesssWithoutImages = [
    {
      title: 'Identify URLs -Smart Proxy',
    },
    {
      img: '/we-scrape.svg',
      title: 'Collect URLs - Headless Browsers',
    },
    {
      img: '/you-use.svg',
      title: 'Get information from the HTML - Collection',
    },
    {
      img: '/you-use.svg',
      title: 'Store Data in the Data Lake - Package',
    },
    {
      img: '/you-use.svg',
      title: 'Data Delivery via APIs - Delivery',
    },
  ]
  return (
    <ScrapeData>
      <Container>
        <div className="data-process-section">
          <div className="heading-box">
            <h2>Our Sweet “Scrape Your Data Process”</h2>
            <h2>in 3 Simple Steps</h2>
          </div>

          <div className="d-flex add-gap justify-content-center flex-wrap">
            {dataProcesss.map((data, i) => {
              return (
                <div className="d-flex">
                  <div className="data-box">
                    <span className="index">{i + 1}</span>
                    <img src={data.img} alt={data.title} />
                    <h4 className="title">{data.title}</h4>
                  </div>
                  <img src="/data-arrow.svg" className="arrow-img" alt="no-arrow" />
                </div>
              )
            })}
          </div>
        </div>
        <div className="techines-section">
          <div className="heading-box">
            <h2>For the techies</h2>
          </div>
          <div className="d-flex add-gap flex-wrap justify-content-center align-items-center ">
            {dataProcesssWithoutImages.map((data, i) => {
              return (
                <div className="d-flex add-gap">
                  <div className="techies-box">
                    <span className="index">{i + 1}</span>
                    <h4 className="title">{data.title}</h4>
                  </div>
                  <img src="/data-arrow.svg" className="arrow-img" alt="no-arrow" />
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </ScrapeData>
  )
}

export default Index
