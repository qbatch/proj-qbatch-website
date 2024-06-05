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
      img: '/custom-enterprise-web-scraping.svg',
      title: 'Custom Enterprise Web Scraping',
      description:
        'We provide custom crawling at high speed assuring maximum accuracy for both startups and mature enterprises. ',
    },
    {
      img: '/large-scale-web-scraping.svg',
      title: 'Large-Scale Web Scraping',
      description:
        'Easily scrape millions of web pages via an automatic process that involves running several scrapers across multiple web servers simultaneously.',
    },
    {
      img: '/web-scraping-services.svg',
      title: 'Web Scraping Services',
      description:
        'Stop relying on scraping software, hardware, tools, or skills when you can avail our web scraping as a service combined with an all-in web scraping strategy.',
    },
    {
      img: '/web-scraping-api-services.svg',
      title: 'Web Scraping API Services',
      description:
        'Build real-time APIs for websites and mobile apps in case of rate-limited or data-limited APIs with our genius web scraping API developers ensuring easy data integration and automation.',
    },
    {
      img: '/custom-ai-solutions.svg',
      title: 'Custom AI Solutions',
      description:
        'We create custom automated website scraping solutions using AI/ML/NLP technologies to perform careful data collection and analysis — offering utility, more than just service.',
    },
  ]

  return (
    <>
      <AssistantWrapper>
        <Container>
          <div className="images-box">
            <Row className="justify-content-between">
              <Col md={4}>
                <h2 className="color-primary">Explore Our Web Data Extraction Services1212</h2>
                <p>
                  Over the years, our web scraping company has facilitated several enterprises to turn scattered,
                  all-over-the-place data into purpose-driven insights toward business sustenance and eminence.
                </p>
              </Col>
              <Col md={7}>
                {dataDrivenData.map((list) => {
                  return (
                    <div className="assistent-box">
                      <img src={list.img} alt={list.title} />
                      <div>
                        <h4>{list.title}</h4>
                        <p> {list.description}</p>
                      </div>
                    </div>
                  )
                })}
              </Col>
            </Row>
          </div>
        </Container>
      </AssistantWrapper>
      <Divider />
    </>
  )
}
export default Index
