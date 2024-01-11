import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup'

import Container from '../../UiComponent/Container'
import AchievementsWrapper from './style'

import { dedicationWork } from '../../../constants'

const Index = () => {
  const formatNumber = (count) => {
  if (count >= 1000) {
    if (count % 1000 === 0) {
      return `${count / 1000}K`;
    }
    return `${Math.floor(count / 1000)}k`;
  }
  return count;
};
  return (
    <AchievementsWrapper>
      <div className="achievements-main">
        <Container className="achievements-inner-wrapper">
          <h2 className="heading">
            Data we didn’t scrape, 
            <br /> but achieved through dedication and smart work
          </h2>
          <Row>
            {dedicationWork.map((data, ind) => (
              <Col md={4} xs={12} key={ind} className="achievements-col">
                <span className={'heading'}>
                  <CountUp
                    decimal=","
                    decimals={data.count === 99.9 ? 2 : ''}
                    end={data.count}
                    duration={3}
                    formattingFn={(value) => formatNumber(value)}
                  />
                  {data.symbol && <span className="color-danger fw-light ms-2">{data.symbol}</span>}
                </span>
                <p>{data.desc}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </AchievementsWrapper>
  )
}

export default Index
