import React from 'react';
import { Container } from 'react-bootstrap';

import { QuotationSection, ProjectCoverWrapper } from './style';

export function ProjectQuote({ quote }) {
  return (
    <QuotationSection>
      <Container>
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
      <img src={cover} alt='cover' className='project-cover' />
    </ProjectCoverWrapper>
  );
}
