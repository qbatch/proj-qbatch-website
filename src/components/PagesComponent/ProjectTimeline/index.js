import React from 'react';
import ProjectTimelineWrapper from './style';
import Container from '../../UiComponent/Container';


const ProjectTimeline = ({steps, phases}) => {
  return (
    <ProjectTimelineWrapper>
      <Container>
        <h2 className='heading text-h2'>Project Timeline</h2>
        <div className='timeline-wrapper'>
          <div className='timeline-steps'>
            {steps.map((step, index) => (
              <div key={index} className={`step step-${index + 1}`}>
                <h3 className='sub-heading'>{step.heading}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <div className='timeline-phases'>
            {phases.map((phase, index) => (
              <>
              <div key={index} className='phase'>{phase.timelineDuration}</div>
              <div className='phase'></div>
              </>
            ))}
          </div>
        </div>
      </Container>
    </ProjectTimelineWrapper>
  );
};

export default ProjectTimeline;
