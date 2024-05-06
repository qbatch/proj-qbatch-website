import React from 'react';
import Container from '../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';

import ExtensionDevInfoWrapper from './style'

const index = () => {
  return (
    <ExtensionDevInfoWrapper>
      <Container>
        <div className='wrapper'>
          <h2 className='heading'>
            Did You Know?
          </h2>
          <Row className='g-4'>
            <Col lg={6}>
             <div className='info-box'>
              <h3 className='text-h4 inner-text'>Enterprise employees spend 75% of their work time on web browsing.</h3>
              <a href='https://cloud.google.com/blog/products/chrome-enterprise/chrome-is-helping-it-teams-support-cloud-first-workforce'><i>(Forrester)</i></a>
             </div>
            </Col>
            <Col lg={6}>
             <div className='info-box'>
              <h3 className='text-h4 inner-text'>The popularity of web browsing caused above 80% of cyberattacks in 2022 — becoming the world’s easiest attack vector.</h3>
              <a href='https://www.verizon.com/business/resources/reports/dbir/?cmp=knc:ggl:ac:ent:ea:na:8888855284&utm_term=2022%20verizon%20data%20breach%20report&utm_medium=cpc&utm_source=google&utm_campaign=GGL_BND_Security_Exact&utm_content=Enterprise&ds_cid=71700000082347933&ds_cid=&gclid=CjwKCAjwkeqkBhAnEiwA5U-uM6LpKMkWqo8_9BLMxE2Ax-n3JS-tdbZHbmSnaSMu4H4FhtUH8Vn7PRoCn6AQAvD_BwE&gclsrc=aw.ds'><i>(DBIR)</i></a>
             </div>
            </Col>
          </Row>
        </div>
      </Container>
    </ExtensionDevInfoWrapper>
  );
};

export default index;