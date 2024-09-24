import React from 'react';
import { Container } from 'react-bootstrap';

import { QuotationSection, ProjectCoverWrapper } from './style';

export function ProjectQuote({ quote }) {
  return (
    <QuotationSection>
      <Container>
        <div className='quote-circle'><img src='/quote-icon.svg' alt='quote' title='quote' loading='lazy' /></div>
        <h2 className="text-h2 heading">
          {quote}
        </h2>
      </Container>
    </QuotationSection>
  );
};

export function ProjectCover({ cover }) {
  return (
    <ProjectCoverWrapper>
      <img src={cover} alt='cover' className='project-cover' loading='lazy' />
    </ProjectCoverWrapper>
  );
}
