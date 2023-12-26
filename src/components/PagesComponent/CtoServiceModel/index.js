import React from 'react';
import { navigate } from 'gatsby'

import CtoServiceWrapper from './style';

import Container from "../../UiComponent/Container"
import PrimaryButton from '../../UiComponent/PrimaryButton';
import Divider from "../../UiComponent/Divider";

const CtoServiceModels = [
  {
    icon: '/cto-as-a-service-collaboration-models _full-time-cto.svg',
    title: 'Full-time CTO',
    description:
      'If you are still shaping your idea and collecting technical requirements, our fractional CTO services can help you translate your ambiguities into detailed docs, technical action plans, budget estimates, and IT pitch decks as needed.',
  },
  {
    icon: '/cto-as-a-service-collaboration-models _one-time-project-cto.svg',
    title: 'Part-time CTO',
    description:
      'If you don’t have enough resources to hire a permanent CTO, you can immediately lend our years of technical experience and insight to fulfill the needs of your startup under a small budget.',
  },
  {
    icon: '/cto-as-a-service-collaboration-models _interim-cto.svg',
    title: 'Interim CTO',
    description:
      'If you’ve lost your full-time CTO, our interim leadership can help you keep your technical and development tasks on track and the talent engaged until a new full-time CTO is hired. ',
  },
  {
    icon: '/cto-as-a-service-collaboration-models-part_time-cto.svg',
    title: 'One-Time Project CTO',
    description:
      'Perfect for fixed-scope projects where our CTO enters to solve critical problems, help with transformations, MVP development, and team and process management to achieve agreed-upon project objectives.',
  },
]

const Index = () => {
  return (
    <>
      <CtoServiceWrapper>
        <Container>
          <h2 className="color-primary">CTO as a Service Collaboration Models</h2>
          {CtoServiceModels.map((data, index) => (
            <div className="cto-service" key={index}>
              <div className="inner-wrapper">
                <img src={data.icon} alt="card icon" width="72px" height="72px" />
                <div className="inner-text">
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
              </div>
              <PrimaryButton onClick={() => navigate('/contact')} borderbottom text="Hire Now" />
            </div>
          ))}
        </Container>
      </CtoServiceWrapper>
      <Divider />
    </>
  )
};

export default Index;
