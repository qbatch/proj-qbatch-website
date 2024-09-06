import React, { lazy } from "react";
import { Row, Col } from "react-bootstrap";

import MultiPlatformWrapper from "./style";

const Container = lazy(() => import("../../UiComponent/Container"));

const Index = ({data, heading, paragraph, wrapperClass, col1, col2, isSubText}) => {
  return (
    <MultiPlatformWrapper className={wrapperClass}>
      <Container>
        <Row>
          <Col lg={col1 || 5}>
            <div className="platform-heading">
              <h2>
                {heading}
              </h2>
              <p>
                {paragraph}
              </p>
            </div>
          </Col>
          <Col lg={col2 || 7}>
            {data.map((item, ind) => (
              <div
                className="d-flex align-items-start gap-3 platform-list"
                key={ind}
              >
                <img src={item.icon} alt="mobile app" title="mobile app" loading="lazy" />
                <div>
                  <h3 className="text-h4">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
            {isSubText &&
              <p className="sub-text">The result? A technology solution that empowers you to <span>achieve your dreams.</span></p>
            }
          </Col>
        </Row>
      </Container>
    </MultiPlatformWrapper>
  );
};

export default Index;
