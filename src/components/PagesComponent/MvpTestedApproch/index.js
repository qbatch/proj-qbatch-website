import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';

import MvpTestedApprochWrapper from './style';

const MvpTestedApproch = () => {
  return (
    <MvpTestedApprochWrapper>
      <Container>
        <h2 className='heading text-h2'>MVP is a Time-Tested Approach</h2>
        <p className='paragraph'>At Qbatch, we optimize product launches with minimal teams and resources to build limited product features viable enough to function properly. Therefore, our MVP product development is simple:</p>
        <Row>
          <Col lg={6}>
            <div className='inner-wrapper'>
              <img className='inner-icon' src='/raise-funds-and-skimp-investments.svg' alt='icon'/>
              <div className='inner-content'>
                <h3 className='text-h4 inner-heading'>Raise funds and skimp investments</h3>
                <p className='inner-paragraph'>Today, venture capital demands more than just an idea; you must show that you’re serious about your game and have taken initial steps in product development; by building an MVP.</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className='inner-wrapper'>
              <img className='inner-icon' src='/get-feedback-and-build-your-idea.svg' alt='icon'/>
              <div className='inner-content'>
                <h3 className='text-h4 inner-heading'>Get feedback and build your idea</h3>
                <p className='inner-paragraph'>Solely relying on team insight and inferences won’t help. Go beyond customer research, test the idea with MVP, and get real feedback without risking the project budget.</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className='inner-wrapper'>
              <img className='inner-icon' src='/check-feasibility-and-scope.svg' alt='icon'/>
              <div className='inner-content'>
                <h3 className='text-h4 inner-heading'>Check feasibility and scope</h3>
                <p className='inner-paragraph'>Before investing in a fully functional product, ensure technical viability i.e. test scalability, 3rd party integrations, and overall product infrastructure.</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className='inner-wrapper'>
              <img className='inner-icon' src='/launch-your-app-within-2-4-months.svg' alt='icon'/>
              <div className='inner-content'>
                <h3 className='text-h4 inner-heading'>Launch your app within 2 - 4 -months</h3>
                <p className='inner-paragraph'>Whether you’ve got a basic idea or an ambitious product plan, MVP provides validation via a testable app, improvable features, and the power to make quicker product releases in an already-tested market.</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className='inner-wrapper'>
              <img className='inner-icon' src='/build-investors-trust.svg' alt='icon'/>
              <div className='inner-content'>
                <h3 className='text-h4 inner-heading'>Build investors' trust</h3>
                <p className='inner-paragraph'>MVPs are a fast-track way to capture investors’ interest and instill confidence to transform your idea into a full-blown, winning product.</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className='inner-wrapper'>
              <img className='inner-icon' src='/understand-end-users.svg' alt='icon'/>
              <div className='inner-content'>
                <h3 className='text-h4 inner-heading'>Understand end users</h3>
                <p className='inner-paragraph'>User feedback analysis gives a clear understanding of how to change the product features and functionality to meet user needs and preferences.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MvpTestedApprochWrapper>
  );
};

export default MvpTestedApproch;
