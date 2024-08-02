import React, { lazy } from "react";
import { Col, Row } from "react-bootstrap";

import RevenueWrapper from "./style";

const Container = lazy(() => import("../../UiComponent/Container"));

const Index = ({data,heading,paragraph,textAlign,enterprise,maxWidth,height, margin}) => {
  return (
    <RevenueWrapper height={height}>
      <Container>
            <div  style={{maxWidth: maxWidth, margin: margin}}  className={`revenue-heading ${textAlign || ''}`}>
              <h2>{heading}</h2>
               {paragraph &&   <p className='paragraph'>{paragraph}</p>}
             
            </div>
            <Row>
          {data?.map((item, index) => (
            <Col lg={4} xl={enterprise ? 4 :3 } md={6} xs={12}  className='d-flex flex-column'>
              <div className="revenue-box">
                <div key={index} className="revenue-data">
                  <div className="revenue-img">
                    <img src={item.image} alt="logo" title="logo" loading="lazy" width='auto' height='auto' />
                  </div>
                  <div className="revenue-desc d-flex flex-column justify-content-center h-100">
                    {item.title && <h3 className="text-h4">{item.title}</h3>}
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </RevenueWrapper>
  );
};

export default Index;
