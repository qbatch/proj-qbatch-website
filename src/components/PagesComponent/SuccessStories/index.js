import React, { useEffect, useRef, useState } from "react";
import StoriesWrapper from "./style";
import PrimaryButton from "../../UiComponent/PrimaryButton";

import Container from "../../UiComponent/Container";
import {stories} from '../../../constants'

const Index = () => {
  
  const [width, setWidth] = useState("");
  const [columnSlice, setColumnSlice] = useState(3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const wrappers = document.querySelectorAll(".wrapper");

    wrappers.forEach((wrapper) => {
      const columns = wrapper.querySelectorAll(".column");
      if (columns.length === 3) {
        const lastColumn = wrapper.lastElementChild;
        const handleMouseOver = () => {
          wrapper.style.transform = "translateX(-33.88%)";
        };

        const handleMouseOut = () => {
          wrapper.style.transform = "translateX(0)";
        };

        lastColumn.addEventListener("mouseover", handleMouseOver);
        lastColumn.addEventListener("mouseout", handleMouseOut);

        return () => {
          lastColumn.removeEventListener("mouseover", handleMouseOver);
          lastColumn.removeEventListener("mouseout", handleMouseOut);
        };
      }
      if (columns.length === 2) {
        const lastColumn = wrapper.lastElementChild;
        const handleMouseOver = () => {
          wrapper.style.transform = "translateX(-50%)";
        };

        const handleMouseOut = () => {
          wrapper.style.transform = "translateX(0)";
        };

        lastColumn.addEventListener("mouseover", handleMouseOver);
        lastColumn.addEventListener("mouseout", handleMouseOut);

        return () => {
          lastColumn.removeEventListener("mouseover", handleMouseOver);
          lastColumn.removeEventListener("mouseout", handleMouseOut);
        };
      }
      else{
         const lastColumn = wrapper.lastElementChild;
        const handleMouseOver = () => {
          wrapper.style.transform = "translateX(0%)";
        };

        const handleMouseOut = () => {
          wrapper.style.transform = "translateX(0)";
        };

        lastColumn.addEventListener("mouseover", handleMouseOver);
        lastColumn.addEventListener("mouseout", handleMouseOut);

        return () => {
          lastColumn.removeEventListener("mouseover", handleMouseOver);
          lastColumn.removeEventListener("mouseout", handleMouseOut);
        };
      }
    });
  }, [columnSlice]);

  useEffect(() => {
    if (width) {
      const slice = width > 1400 ? 3 : width < 992 ? 1 : 2 ;
      setColumnSlice(slice);
    }
  }, [columnSlice, width]);

  const renderColumns = () => {
    const columns = [];
    for (let i = 0; i < stories.length; i += columnSlice) {
      const columnSet = stories.slice(i, i + columnSlice);
      const columnElements = columnSet.map((item, index) => (
        <div className={`column ${item.primary ? "primary" : ""} ${columnSlice === 2 ? "min-w-50" : ""}`} key={index}>
          <div className="column-inner">
            <div className="column-inner-left">
              <img src="/ecom-circle.png" className="image-logo" alt="no-image" />
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
        <p>Our Success Stories Innovators from across the industry have trusted Qbatch to build high-impact products</p>
        <div className="stroies-wrapper">{renderColumns()}</div>
      </Container>
    </StoriesWrapper>
  );
};

export default Index;
