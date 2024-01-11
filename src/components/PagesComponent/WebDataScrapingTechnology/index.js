import React from 'react'
import AssistantWrapper from './style'
import Container from '../../UiComponent/Container'
import Divider from '../../UiComponent/Divider'

const Index = () => {
  const dataDrivenData = [
    {
      img: '/python-logo.svg',
      title: 'Python',
    },
    {
      img: '/scrapy.svg',
      title: 'Scrapy',
      description: 'Standardize, cleanse, and aggregate data into tangible, structured feeds.',
    },
    {
      img: '/goLang.svg',
      title: 'GoLang',
      description: 'Stop depending on DIY software for critical data, let us do the complex scraping work for you.',
    },
    {
      img: '/javaScript.svg',
      title: 'JavaScript',
      description:
        'Receive data in your preferred format: CSV, XML, JSON format, tab-delimited, fixed-width, or use our APIs to pull data.',
    },
    {
      img: '/ruby.svg',
      title: 'Ruby',
      description: 'Scrape data to AWS, Google Cloud, Microsoft Azure, Snowflake, or Databricks.',
    },
  ]
  return (
    <>
      <AssistantWrapper>
        <Container>
          <div className="text-center heading-box">
            <h2 className="color-primary">Web and Data Scraping Technology We Use</h2>
            <p>
              Source, extract, package, and deliver the most business-critical goals with our trusted website scraping
              tools: 
            </p>
          </div>

          <div className="images-box">
            {dataDrivenData.map((list) => {
              return (
                <div className="d-flex flex-column gap-3">
                  <img src={list.img} alt={list.title} />
                  <h4>{list.title}</h4>
                </div>
              )
            })}
          </div>
        </Container>
      </AssistantWrapper>
      <Divider />
    </>
  )
}
export default Index
