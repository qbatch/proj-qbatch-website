import React, { useEffect, useRef, useState } from "react";
import StoriesWrapper from "./style";
import PrimaryButton from "../../UiComponent/PrimaryButton";

import Container from "../../UiComponent/Container";
import { stories } from "../../../constants";

const Index = () => {
  const [columnSlice, setColumnSlice] = useState(3);

  const renderColumns = () => {
    const columns = [];
    for (let i = 0; i < stories.length; i += columnSlice) {
      const columnSet = stories.slice(i, i + columnSlice);
      columnSet.map((item, index) => (
        <div
          className={`column ${item.primary ? "primary" : ""} ${
            columnSlice === 2 ? "min-w-50" : ""
          }`}
          key={index}
        >
          <div className="column-inner">
            <div className="column-inner-left">
              <img
                src="/ecom-circle.png"
                className="image-logo"
                alt="no-image"
              />
            </div>
            <div className="column-inner-right">
              <div>
                <img className="logo" src={item.logo} />
                <h3>{item.title}</h3>
                <p className="paragraph">{item.description}</p>
                <div className="badge">
                  {item.badge.map((badge) => (
                    <span>{badge}</span>
                  ))}
                </div>
              </div>
              <PrimaryButton text="View Details" color={i == 2 ? "#fff" : ""} />
            </div>
          </div>
        </div>
      ));
      const wrapperElement = (
        <div className="wrapper" key={i}>
          {columnElements}
        </div>
      );

      columns.push(wrapperElement);
    }
    return columns;
  };

  return (
    <StoriesWrapper>
      <Container>
        <h1 className="color-primary heading">Our Success Stories</h1>
        <p>
          Our Success Stories Innovators from across the industry have trusted
          Qbatch to build high-impact products
        </p>
        <div className="wrapper">
          {stories.map((item, index) => (
            <div
              className={`column ${
                columnSlice === 2 ? "min-w-50" : ""
              }`}
              key={index}
            >
              <div className="column-inner">
                <div className="column-inner-left">
                  <img
                    src={item.img}
                    className="image-logo"
                    alt="no-image"
                  />
                </div>
                <div className="column-inner-right">
                  <div className="content">
                    <img className="logo" src={item.logo} />
                    <h3>{item.title}</h3>
                    <p className="paragraph">{item.description}</p>
                    <div className="badge">
                      {item.badge.map((badge) => (
                        <span>{badge}</span>
                      ))}
                    </div>
                  </div>
                  <PrimaryButton text="View Details" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </StoriesWrapper>
  );
};

export default Index;
