import React, { lazy } from "react";
import { Row, Col } from "react-bootstrap";

import PeopleFirstWrapper from "./style";

const Button = lazy(() => import("../../UiComponent/Button"));
const Container = lazy(() => import("../../UiComponent/Container"));

const Index = ({ peopleFirstData, heading, btnText, wrapperClass, paragraph }) => {
  return (
    <PeopleFirstWrapper className={wrapperClass}>
      <Container>
        <h2 className="main-heading">{ heading }</h2>
        <p className="paragraph sub-heading">{ paragraph }</p>
        <div className="counter-wrapper">
          <Row>
            {peopleFirstData.map((data, ind) => (
              <Col lg={3} md={4} xs={6} key={ind} className="achievements-col">
                <img src={data.icon} alt={data.symbol} title={data.symbol} loading="lazy" className="icon" />
                <p className="text-h4 paragraph">{data.desc}</p>
              </Col>
            ))}
          </Row>
          {btnText && <Button text={btnText} className="section-btn" />}
        </div>
      </Container>
    </PeopleFirstWrapper>
  );
};

export default Index;
