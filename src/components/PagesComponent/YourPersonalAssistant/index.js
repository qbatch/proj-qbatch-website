import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { navigate } from 'gatsby'
import AssistantWrapper from './style'
import Container from '../../UiComponent/Container'
import Divider from '../../UiComponent/Divider'
import Button from '../../UiComponent/Button'

const Index = () => {
  const dataDrivenData = [
    {
      img: '/turn-data-into-actionable-intelligence.svg',
      title: 'Turn Data into Actionable Intelligence',
      description:
        'Decluttering data, removing the mess; we help you take the chaos out of web data to help you focus on your greater goals. Yes, we’re different, but how?',
    },
    {
      img: '/from-unstructured-to-structured-data.svg',
      title: 'From unstructured to structured data',
      description: 'Standardize, cleanse, and aggregate data into tangible, structured feeds.',
    },
    {
      img: '/guaranteed-clean-data-or-money-back.svg',
      title: 'Guaranteed clean data or money back. Period!',
      description: 'We run several quality checks on your data to assure 100% data integrity and accuracy.',
    },
    {
      img: '/get-maximum-coverage.svg',
      title: 'Get maximum coverage',
      description: 'Stop depending on DIY software for critical data, let us do the complex scraping work for you.',
    },
    {
      img: '/pick-your-favorite-data-formats.svg',
      title: 'Pick your favorite data formats',
      description:
        'Receive data in your preferred format: CSV, XML, JSON format, tab-delimited, fixed-width, or use our APIs to pull data.',
    },
    {
      img: '/deep-cloud-integration.svg',
      title: 'Deep cloud integration',
      description: 'Scrape data to AWS, Google Cloud, Microsoft Azure, Snowflake, or Databricks.',
    },
    {
      img: '/only-support-no-trade-offs.svg',
      title: 'Only support, no trade-offs',
      description: 'Get involved in the project from the start and ensure we’re extracting what you want.',
    },
    {
      img: '/build-custom-data-pipelines.svg',
      title: 'Build custom data pipelines',
      description: 'We offer unrivaled domain expertise that serves the data needs of your unique business case.',
    },
    {
      img: '/recurring-web-scraping.svg',
      title: 'Recurring web scraping',
      description: 'Scrape data from any website on schedule at whatever frequency you want.',
    },
  ]
  return (
    <>
      <AssistantWrapper>
        <Container>
          <div className="text-center heading-box">
            <h2 className="color-primary">Qbatch — Your Personal Assistant to</h2>
          </div>

          <div className="images-box">
            <Row>
              {dataDrivenData.map((list) => {
                return (
                  <Col md={4}>
                    <div className="d-flex flex-column assistent-box">
                      <div className="d-flex gap-3">
                        <img src={list.img} alt={list.title} />
                        <h4>{list.title}</h4>
                      </div>
                     <p> {list.description}</p>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>

          <div className="d-flex justify-content-center my-5">
            <Button text="Scrape Your Data" onClick={() => navigate('/contact')} />
          </div>
        </Container>
      </AssistantWrapper>
      <Divider />
    </>
  )
}
export default Index
