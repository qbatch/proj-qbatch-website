import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import AssistantWrapper from './style'
import Container from '../../UiComponent/Container'
import Divider from '../../UiComponent/Divider'

const Index = () => {
  const dataDrivenData = [
    {
      title: 'Generic-Scraper',
      caption: 'Generic-Scraper',
      badge: [
        'Python',
        'Scrapy-redis',
        'Fastapi',
        'Docker',
        'Kubernetes',
        'Kafka',
        'Selenium',
        'Puppeteer',
        'Scrapingbee',
        'Microservice',
      ],
      paragraph: [
        'We have developed a sophisticated scraping project with a microservices architecture that efficiently handles incoming requests from both an API server and internal calls. ',
        'The scraper intelligently selects proxies from a pool of proxies using smart algorithms. This proxy selection mechanism enhances the project’s capability to access and scrape websites while maintaining anonymity and reliability.',
        'Generic-Scraper manages high traffic loads and automatically recovers services in case of failures through Kubernetes integration. This architecture allows for efficient and reliable web scraping, making the system adaptable to varying workloads and proxy requirements.',
      ],
    },
    {
      title: 'Ah-scrapers',
      caption: 'Data Scraping',
      badge: ['Python', 'Scrapy-redis', 'RabbitMQ', 'Selenium', 'Mechanize'],
      paragraph: [
        'Ah-scrapers is a powerful scraping pipeline that manages, scrapes, and refreshes data of over 120 E-commerce stores daily. The pipeline fetches and returns cleaned data to the RabbitMQ queue. It employs various techniques to handle captchas and other blocking parameters. Additionally, it utilizes a validator to confirm the accuracy and correctness of the data.',
      ],
    },
    {
      title: 'Product Refresher',
      caption: 'Data Scraping',
      badge: ['Ruby', 'SQS', 'Mechanize', 'API', 'AWS Alarms', 'Selenium', 'Slack Webhooks'],
      paragraph: [
        'We’ve built an intuitive system that relies on AWS queues to receive input data in the form of products. The system then identifies the supplier associated with each product and proceeds to scrape relevant information from the supplier’s source, which includes updating product prices, stock, and shipping fees. ',
        'Product Refresher accommodates user-defined settings to establish delivery estimates for these products. Following this comprehensive data refresh, the system dispatches the updated product information to the output queue. To monitor system responsiveness, we’ve configured AWS Alarms to trigger alerts if the input queue remains idle for a specified period.',
      ],
    },
  ]
  return (
    <>
      <AssistantWrapper>
        <Container>
          <h2 className="color-primary">Qbatch’s Featured Projects in Data Scraping </h2>

          <div className="images-box">
            <Row>
              {dataDrivenData.map((list) => {
                return (
                  <>
                    <div class="scraper-box">
                      <Row className="justify-content-between">
                        <Col md={4}>
                          <div className="d-flex flex-column ">
                            <div className="d-flex flex-column gap-3">
                              <h3>{list.title}</h3>
                              <Link className="link">{list.caption}</Link>
                              <div class="badges">
                                {list.badge.map((badge) => (
                                  <span>{badge}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={7}>
                          <div>
                            {list.paragraph.map((paragraph) => (
                              <p className="paragraph">{paragraph}</p>
                            ))}
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <Divider />
                  </>
                )
              })}
            </Row>
          </div>
        </Container>
      </AssistantWrapper>
      <Divider />
    </>
  )
}
export default Index
