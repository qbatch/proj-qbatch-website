import React from 'react';
import { navigate } from 'gatsby';
import { Col, Row } from 'react-bootstrap';

import ExtensionTypeWrapper from './style';
import Container from '../../UiComponent/Container';
import Button from "../../UiComponent/Button"

const ExtensionType = ({ data, heading, paragraph, wrapperClass, btnClass, btnText, buttonLink }) => {
const btnLink = buttonLink || '/contact';
  return (
    <ExtensionTypeWrapper className={wrapperClass}>
      <Container>
        <h2 className='heading'>{heading}</h2>
        <p className='paragraph'>{paragraph}</p>
        <Row>
          {data.map((extension, index) => (
            <Col key={index} xl={3} md={6}>
              <div className='inner-box'>
                <h3 className='text-h4 inner-heading' dangerouslySetInnerHTML={{ __html: extension.title }} />
                <p>{extension.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        {btnText && (
          <div className='d-flex justify-content-center'>
            <Button text={btnText} onClick={() => navigate(btnLink)}   className={`inner-button ${{btnClass}}`} />
          </div>
        )}
      </Container>
    </ExtensionTypeWrapper>
  );
};

export default ExtensionType;
