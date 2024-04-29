import React from 'react'
import { ExploreOurEnterpriseLevelWrapper } from './style'
import Container from '../../UiComponent/Container'
import Button from '../../UiComponent/Button'

const ExploreOurEnterpriseLevel = () => {
  const technicalGuidanceData = [
    {
      img: '/vertical-aligmnet.svg',
      title: 'Vision and Future Alignment',
      text: 'Build a roadmap that elevates your technical strategy, objectives, and operations to achieve a holistic dig/vertical-aligmnet.svgital footprint powering associated people, processes, and possibilities with our CTO consulting services. Let’s turn your vision into victory.'
    },
    {
      img: '/leading-and-scaling-teams.svg',
      title: 'Leading and Scaling Teams',
      text: 'Your development team decides and shapes the future of the entire business. Thus we keep the bar high when it comes to tech leadership and management. Enjoy proficient team management, process optimization, and daily reporting with our CTO services.'
    },
    {
      img: '/strategic-procurement-and-cost-optimization.svg',
      title: 'Technology Integration and Analysis',
      text: 'Discover whether your business requires technical fixing or a total overhaul to assure zero downtime, accessibility, and enterprise-wide information exchanges. Eliminate software bloat and build technical resilience with our impeccable CaaS providers.'
    },
    {
      img: '/technical-audits.svg',
      title: 'Technical Audits, Due Diligence, and Change Management',
      text: 'We dive deeper into the technical risks associated with your business processes and strategy, conduct audits, prepare you for due diligence, and prescribe rock-solid change management roadmaps toward total digital transformation and delivery across the company.'
    },
    {
      img: '/system-engineering-and-design.svg',
      title: 'System Engineering and Design',
      text: 'You cannot fully grasp the technical aspects of a software product if you lack technical depth and knowledge. Leverage our CTO expertise and insight to demonstrate, develop, and design low-risk and hi-tech enterprise system'
    },
    {
      img: '/technical-audit.svg',
      title: 'Technology Integration and Analysis',
      text: 'Discover whether your business requires technical fixing or a total overhaul to assure zero downtime, accessibility, and enterprise-wide information exchanges. Eliminate software bloat and build technical resilience with our impeccable CaaS providers.'
    },
  ]
  return (
    <ExploreOurEnterpriseLevelWrapper>
      <Container>
        <div className='title-wrapper'>
          <h1>More Than Just “Technical Guidance” Explore Our Enterprise-level <span>CTO Services</span></h1>
        </div>
        <div className='card-overlay-wrapper'>
          {technicalGuidanceData.map((item, index) => (
            <div key={index} className='card-item-wrapper'>
              <img src={item.img} />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <Button text="Let’s Get Started" />
      </Container>
    </ExploreOurEnterpriseLevelWrapper>
  )
}

export default ExploreOurEnterpriseLevel
