import React from 'react'
import { navigate } from 'gatsby'
import StoppingDataDriven from './style'
import Container from '../../UiComponent/Container'
import Divider from '../../UiComponent/Divider'
import Button from '../../UiComponent/Button'

const Index = () => {
  const dataDrivenData = [
    'Are you still getting blocked by websites with anti-scraping measures?',
    'Do you have high-volume data needs?',
    'Vendor discontinued their service and now you’re unable to fetch data?',
    'Spending days on data scraping but not getting results?',
    'Can’t determine the right technology to scrape data?',
    'Are culture constraints the biggest obstacle to becoming a data-driven org.?',
  ]
  return (
    <>
      <StoppingDataDriven>
        <Container>
          <div className="text-center heading-box">
            <h2 className="color-primary">So, tell us, what’s stopping you from</h2>
            <h2 className="color-primary">going data-driven?</h2>
          </div>
          <div className="images-box">
            {dataDrivenData.map((list) => {
              return (
                <div className="d-flex flex-column">
                  <h4>{list}</h4>
                  <Divider />
                </div>
              )
            })}
          </div>
          <p className="text-center">
            Could you relate or do we need to put more effort? In either case, we’d love to help!
          </p>
          <div className="d-flex justify-content-center my-5">
            <Button text="Get Free Consultation" onClick={()=>navigate('/contact')} />
          </div>
        </Container>
      </StoppingDataDriven>
      <Divider />
    </>
  )
}
export default Index
