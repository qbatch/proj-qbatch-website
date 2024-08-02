import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';

import ProjectAssetsWrapper from './style';

const ProjectAssets = ({ projectData }) => {
  const { fontFamily, projectColors, projectIcons, projectInnerComponents } = projectData;
  console.log('colors', projectData)
  const colorsData = [
    { type: 'Natural', colors: projectColors?.natural.colors },
    { type: 'Primary', colors: projectColors?.primary.colors },
    { type: 'Secondary', colors: projectColors?.secondary.colors },
  ];

  return (
    <ProjectAssetsWrapper>
      <Container>
        <Row className='g-4'>
          <Col lg={12}>
            <div className='box'>
              <h2 className='text-h1 main-heading'>
                <span>Typography & Colours</span>
              </h2>
              <div className='font-info'>
                <h3 className='text-h1 heading'>{fontFamily}</h3>
                <div className='font-weights'>
                  <span>Regular</span>
                  <span>Medium</span>
                  <span>Bold</span>
                </div>
              </div>
              <div className='font-face'>Aa</div>
              <div className='colors'>
                {colorsData.map((colorSet, index) => (
                  <div className='wrapper' key={index}>
                    <div className='color-palate'>
                      {colorSet.colors?.map((color, id) => (
                        <div className='color' key={id} style={{ backgroundColor: color }}></div>
                      ))}
                    </div>
                    <span>{colorSet.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className='box-sm'>
              <h2 className='text-h2 heading'>Icons</h2>
              <img src={projectIcons?.localFile?.url} alt='icons' />
            </div>
          </Col>
          <Col lg={7}>
            <div className='box-sm'>
              <h2 className='text-h2 heading'>Components</h2>
              <img src={projectInnerComponents?.localFile?.url} alt='components' />
            </div>
          </Col>
        </Row>
      </Container>
    </ProjectAssetsWrapper>
  );
};

export default ProjectAssets;
