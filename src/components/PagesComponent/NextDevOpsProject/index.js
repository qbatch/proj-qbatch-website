import React from 'react';
import NextDevOpsProjectWrapper from './style';
import Container from '../../UiComponent/Container';

const NextDevOpsProject = () => {
  const boxesData = [
    { icon: '/devops-dna.svg', text: 'DevOps DNA' },
    { icon: '/strongly-agile-and-transparent.svg', text: 'Strongly Agile & Transparent' },
    { icon: '/relevant-delivery-experience.svg', text: 'Relevant Delivery Experience' },
    { icon: '/stakeholder-visibility.svg', text: 'Stakeholder Visibility' },
    { icon: '/dedicated-devops-team.svg', text: 'Dedicated DevOps Team' },
    { icon: '/proactive-communications.svg', text: 'Proactive Communication' },
    { icon: '/homogenous-approach.svg', text: 'Homogenous Approach' },
    { icon: '/flexible-business-models2.svg', text: 'Flexible Business Models' },
    { icon: '/fool-proof-security.svg', text: 'Fool-Proof Security and Control' },
    { icon: '/great-value-for-money2.svg', text: 'Great Value for Money' }
  ];

  return (
    <NextDevOpsProjectWrapper>
      <Container>
        <h2 className='heading text-center'>Why Choose Qbatch For Your Next DevOps Project?</h2>
        <div className='boxes'>
          {boxesData.map((box, index) => (
            <div className='box' key={index}>
              <img src={box.icon} alt={box.text} />
              <span>{box.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </NextDevOpsProjectWrapper>
  );
};

export default NextDevOpsProject;
