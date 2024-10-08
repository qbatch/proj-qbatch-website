import React from 'react'
import { TravelAppSolutionsForYourPurposesWrapper } from './style'
import Container from '../../UiComponent/Container'
import Slider from 'react-slick'

const TravelAppSolutionsForYourPurposes = () => {
  const TravelAppSolutionsData = [
    {
      heading: 'For Travelers',
      img: '/for-travelers.svg',
      content: [
        {
          text: 'Hotel and apartment booking apps'
        },
        {
          text: 'Restaurant and cafe booking systems'
        },
        {
          text: 'Event ticketing apps'
        },
        {
          text: 'Taxi and ride-sharing apps'
        },
        {
          text: 'Sharing and rental services'
        },
        {
          text: 'Currency exchange platforms'
        },
        {
          text: 'Travel guides and navigators'
        },
        {
          text: 'Cheap travel ticket finders'
        },
        {
          text: 'Traffic timetables and maps'
        }
      ]
    },
    {
      heading: 'For Travel Agencies and Tour Operators',
      img: '/tour-agencies.svg',
      content: [
        {
          text: 'Tourism websites and portals'
        },
        {
          text: 'Travel mobile apps for enterprises'
        },
        {
          text: 'Comprehensive packaging software for tour packages'
        },
        {
          text: 'Inventory management systems'
        },
        {
          text: 'Automated sales processes'
        },
        {
          text: 'Business insights tools'
        },
        {
          text: 'Relationship management with partners and clients'
        },
        {
          text: 'Custom CRM systems'
        },
        {
          text: 'API tour aggregator integrations'
        },
        {
          text: 'ERP systems'
        },
        {
          text: 'Promotional apps'
        },
        {
          text: 'Customer support solutions, including chatbots'
        },
      ]
    },
    {
      heading: 'For Hotels, Restaurants, and Other Service Providers:',
      img: '/for-hotels.svg',
      content: [
        {
          text: 'Staff management systems'
        },
        {
          text: 'ERP systems'
        },
        {
          text: 'Asset management tools'
        },
        {
          text: 'Business process management solutions'
        },
        {
          text: 'Booking systems'
        },
        {
          text: 'Restaurant management systems'
        },
        {
          text: 'Hotel management systems'
        },
        {
          text: 'Human resources and recruitment systems'
        },
        {
          text: 'Food delivery systems'
        },
        {
          text: 'Service-based warehouse management systems'
        },
        {
          text: 'Combined hospitality management systems'
        },
      ]
    },
    {
      heading: 'For Ticket Sellers',
      img: '/for-tickets.svg',
      content: [
        {
          text: 'Enhanced inventory management'
        },
        {
          text: 'Automated sales systems'
        },
        {
          text: 'Improved customer relationship management'
        },
      ]
    },
  ]
  const sliderSettings = {
    dots: true,              
    infinite: true,           
    speed: 500,               
    slidesToShow: 1,         
    slidesToScroll: 1,       
    autoplay: true,           
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <TravelAppSolutionsForYourPurposesWrapper>
      <Container>
        <h2>Travel App Solutions for Your Purposes</h2>
        <p>As an established travel software development company, we can create custom travel apps and tourism software to meet your business needs.</p>
        <div className='web-base'>
        <section>
          {TravelAppSolutionsData.map((item, index) => (
            <div key={index} className='card-item'>
              <h3>{item.heading}</h3>
              <div className='card-child'>
                <ul>
                  {item.content.map((itemCard, indexCard) => (
                    <li key={indexCard}>{itemCard.text}</li>
                  ))}
                </ul>
                <img src={item.img} alt={item.img} />
              </div>
            </div>
          ))}
        </section>
        </div>
        <div className='mobile-base'>
        <Slider {...sliderSettings}>
          {TravelAppSolutionsData.map((item, index) => (
            <div key={index} className={`card-item ${index === 2 ? 'mb-2' : index === 3 ? 'mb-2': null}`} >
              <p className='min-heading'>{item.heading}</p>
              <div className='card-child'>
                <ul>
                  {item.content.map((itemCard, indexCard) => (
                    <li key={indexCard}>{itemCard.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </Container>
    </TravelAppSolutionsForYourPurposesWrapper>
  )
}

export default TravelAppSolutionsForYourPurposes
