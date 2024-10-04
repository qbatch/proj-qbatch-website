import React from 'react'

import Container from '../../UiComponent/Container'
import Button from '../../UiComponent/Button'

import { LookingToProvideWrapper } from './style'

const LookingToProvide  = () => {
  return (
    <LookingToProvideWrapper>
      <Container>
        <section>
          <img src="/desktop-image.svg" alt="" />
          <div className='content-item'>
            <h2>Looking to provide your guests with a stress-free mobile or web app solution for effortless bookings? Look no further.</h2>
            <Button className="desktop" text="Hire Seasoned SaaS Experts" />
          </div>
        </section>
            <Button className="mobile" text="Hire Seasoned SaaS Experts" />
      </Container>
    </LookingToProvideWrapper>
  )
}

export default LookingToProvide;
