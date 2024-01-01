import React from 'react'
import Button from '../../UiComponent/HomeButton/index'
import Container from '../../UiComponent/Container'
import { Typewriter } from 'react-simple-typewriter'
import { navigate } from 'gatsby'
import { DedicatedDeveloperWrapper } from './style'

const Index = () => {
  return (
    <DedicatedDeveloperWrapper>
      <Container>
        <div className="title-portion">
          <h1>
            Software Development & <br /> Consultancy for
            <span>
              <Typewriter
                words={['Startups', 'Entrepreneurs', 'Enterprise Owners', 'Risk-takers', 'Innovators']}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>
          <p>
            200+ enterprises have already garnered great financial results and market outreach withour time-tested
            development flow, error-free code quality, and on-time project delivery.
          </p>
          <div className="text-center d-flex align-items-center justify-content-center">
            <Button text="Schedule a Meeting" onClick={() => navigate('/contact')} />
          </div>
        </div>
        <div className="text-center add-space"></div>
      </Container>
    </DedicatedDeveloperWrapper>
  )
}

export default Index
