import React, { useEffect } from "react";
import DemoServiceWrapper from "./style";

import Container from "../../UiComponent/Container";

const data = [
  {
    heading: "lorem 1",
    content: "lorem ipsum dolor",
  },
  {
    heading: "lorem 2",
    content: "lorem ipsum dolor",
  },
  {
    heading: "lorem 3",
    content: "lorem ipsum dolor",
  },
  {
    heading: "lorem 3",
    content: "lorem ipsum dolor",
  },
  {
    heading: "lorem 3",
    content: "lorem ipsum dolor",
  },
  {
    heading: "lorem 3",
    content: "lorem ipsum dolor",
  },
  {
    heading: "lorem 3",
    content: "lorem ipsum dolor",
  },
  {
    heading: "lorem 3",
    content: "lorem ipsum dolor",
  },
  // Add more data objects as needed...
];

const Index = () => {
  useEffect(() => {
    const wrappers = document.querySelectorAll(".wrapper");

    wrappers.forEach((wrapper) => {
      const columns = wrapper.querySelectorAll(".column");
      if (columns.length === 3) {
        const lastColumn = wrapper.lastElementChild;

        const handleMouseOver = () => {
          wrapper.style.transform = "translateX(-33.33%)";
        };

        const handleMouseOut = () => {
          wrapper.style.transform = "none";
        };

        lastColumn.addEventListener("mouseover", handleMouseOver);
        lastColumn.addEventListener("mouseout", handleMouseOut);

        return () => {
          lastColumn.removeEventListener("mouseover", handleMouseOver);
          lastColumn.removeEventListener("mouseout", handleMouseOut);
        };
      }
    });
  }, []);

  const renderColumns = () => {
    const columns = [];

    for (let i = 0; i < data.length; i += 3) {
      const columnSet = data.slice(i, i + 3);

      const columnElements = columnSet.map((item, index) => (
        <div className="column" key={index}>
          <div className="column-inner">
            <div className="column-inner-left"></div>
            <div className="column-inner-right">
              <h3>{item.heading}</h3>
              <p>{item.content}</p>
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
    <DemoServiceWrapper>
      <Container>
        {renderColumns()}
      </Container>
    </DemoServiceWrapper>
  );
};

export default Index;