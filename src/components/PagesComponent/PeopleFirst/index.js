import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container";
import PeopleFirstWrapper from "./style";

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
                <img src={data.icon} alt={data.symbol} className="icon" />
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
