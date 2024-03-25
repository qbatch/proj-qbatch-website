import React from 'react'
import Container from '../../UiComponent/Container'
import AwsPartnerWrapper from './style'

const Index = () => {
  return (
    <Container>
    <AwsPartnerWrapper>
      <div className="d-flex justify-content-between flex-wrap" >
        <img src="/aws-partner.svg" alt="no-logo" />
           <img src="/aws-partner.svg" alt="no-logo" />
           <img src="/aws-partner.svg" alt="no-logo" />
           <img src="/aws-developer.svg" alt="no-logo" />
           <img src="/aws-devops.svg" alt="no-logo" />
        </div>
    </AwsPartnerWrapper>
    </Container>
  )
}

export default Index
