import React from "react";
import { Row, Col } from "react-bootstrap";
import SeemToWorkWrapper from "./style";
import Container from "../../UiComponent/Container";
import CountUp from 'react-countup'
import { productDesignCounterData } from "../../../constants";

const index = () => {
  const numCols = 4;
  const displayedproductDesignCounterData = productDesignCounterData.map(data => {
    if (data.id === 4) {
      return {
        ...data,
        count: (
          <div className="inner-counter">
            <CountUp end={3} duration={3} /><span className="of"> Of </span><CountUp end={5} duration={3} />
          </div>
        ),
      };
    }
    return data;
  });

  return (
    <SeemToWorkWrapper>
      <Container>
        <h2 className="heading text-center">And it just seems to work…</h2>
        <Row>
          {displayedproductDesignCounterData.map((data, ind) => (
            <Col md={numCols} sm={numCols} xs={12} key={ind} className="work-col">
              <span className="text-h1 fw-bold">
                {typeof data.count === 'number' ? (
                  <CountUp end={data.count} duration={3} />
                ) : (
                  data.count 
                )}
                {data.symbol && (
                  <span className="color-danger fw-light ms-2">{data.symbol}</span>
                )}
              </span>
              <p>{data.desc}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </SeemToWorkWrapper>
  );
};

export default index;
