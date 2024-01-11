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
      img: '/news-social-media-sites.svg',
      title: 'News & Social Media Sites',
      description:
        'Ensure timely data delivery across news channels and social media platforms with our automated data extraction specialists.',
    },
    {
      img: '/price-product-reviews.svg',
      title: 'Price, Product, & Reviews',
      description:
        'Actively monitor prices, reviews, and brand reputation of your competitors across online marketplaces, food stores, pharmacies, apparel stores, etc., and make efficient decisions. ',
    },
    {
      img: '/market-research-and-analysis.svg',
      title: 'Market Research and Analysis',
      description:
        'Boost your marketing campaigns by extracting data from your ideal customer profiles including Facebook, Instagram, TikTok, YouTube, Google Maps, and more.',
    },
    {
      img: '/stock-inventory-and-order-management.svg',
      title: 'Stock, Inventory, and Order Management',
      description: 'Stop depending on DIY software for critical data, let us do the complex scraping work for you.',
    },
    {
      img: '/drop-shipping-automation.svg',
      title: 'Drop-shipping Automation',
      description:
        'Obtain accurate information from Amazon, Walmart, AliExpress, eBay, Etsy, etc., and get data in preferred formats by hiring our talented web scrapers.',
    },
    {
      img: '/real-estate-and-housing.svg',
      title: 'Real Estate and Housing',
      description:
        'Fetch real estate listings of properties, agents, brokers, mortgages, construction law permits, foreclosures, MLS, etc. instead of manually collecting information from various sources.',
    },
    {
      img: '/stock-and-financial-market.svg',
      title: 'Stock and Financial Market',
      description:
        'Keep an eye on global financial markets, stock markets, commodity trading, and economic indicators and boost existing data feeds to redefine internal financial models.',
    },
    {
      img: '/job-data-and-human-capital.svg',
      title: 'Job Data and Human Capital',
      description:
        'Hunt the finest talent, aggregate jobs from job boards or corporate platforms, and keep a record of who your competition is employing with our robust data harvesting services.',
    },
    {
      img: '/travel-hotel-and-airline.svg',
      title: 'Travel, Hotel, and Airline',
      description:
        'Analyze travel websites, hotel reviews, pricing, room availability, and airline ticket prices by leveraging our web scraping services and solutions and staying ahead of the game.',
    },
    {
      img: '/research-and-journalism.svg',
      title: 'Research and Journalism',
      description:
        'Feature mind-bending stats and data in your next research project or news story with our best-in-class web service providers offering niche-specific expertise.',
    },
  ]
  return (
    <>
      <AssistantWrapper>
        <Container>
          <div className=" heading-box">
            <h2 className="color-primary">Domain-Specific Data Scraping Solutions</h2>
            <p>we offer well-structured and customized data extraction solutions in the following domains:</p>
          </div>

          <div className="images-box">
            <Row>
              {dataDrivenData.map((list) => {
                return (
                  <Col md={6}>
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
