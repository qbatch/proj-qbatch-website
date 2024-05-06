import React from 'react';
import ExtensionTypeWrapper from './style';
import Container from '../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';

const ExtensionType = () => {
  const extensionTypes = [
    {
      title: 'Password<br>Manager',
      description: 'Store encrypted passwords online and access them using a single master password across browsers.'
    },
    {
      title: 'To-Do<br>and Note',
      description: 'Get more done in less time with a to-do list and notes extension.'
    },
    {
      title: 'Amazon Seller<br>Management',
      description: 'Sell and distribute your products and request customer reviews as needed.'
    },
    {
      title: 'Screen Shots and Video<br>Extensions',
      description: 'Capture screenshots and record screencasts for easy uploading anywhere.'
    },
    {
      title: 'Instant Chat<br> Extension',
      description: 'Turn visitors into buyers by integrating live meetings and email messages in a single live chat tool.'
    },
    {
      title: 'Content Manager/<br>Aggregator',
      description: 'Build powerful and structured content to enrich your store with custom fields.'
    },
    {
      title: 'Virtual Class<br>Manager',
      description: 'Manage learners’ performance, lesson plans, attendance, grade assessments, reports, and schedules.'
    },
    {
      title: 'eSignature<br> Manager',
      description: 'Digitally sign your documents securely and get things done instantly.'
    }
  ];

  return (
    <ExtensionTypeWrapper>
      <Container>
        <h2 className='heading'>Types of Browser Extensions We Can Develop For Your Business</h2>
        <p className='paragraph'>Business models that revolve around browser extension development have proven their commercial effectiveness for easy product distribution among users. Types of extensions we can build for you:</p>
        <Row>
          {extensionTypes.map((extension, index) => (
            <Col key={index} xl={3} md={6}>
              <div className='inner-box'>
                <h3 className='text-h4 inner-heading' dangerouslySetInnerHTML={{ __html: extension.title }} />
                <p>{extension.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </ExtensionTypeWrapper>
  );
};

export default ExtensionType;
