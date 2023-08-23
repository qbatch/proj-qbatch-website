import React, { useEffect, useRef, useState } from "react";
import DemoServiceWrapper from "./style";
import ExpandableView from "./style";
import PrimaryButton from "../../UiComponent/PrimaryButton";

import Container from "../../UiComponent/Container";
  const stories = [
    {
      logo: "/ecom-circle.svg",
      title: "Ecom Circles",
      description:
        "We created an all-in-one E-commerce Management Software trusted by 3000+ Amazon and Walmart sellers to organize and streamline their drop-shipping business.",
      badge: ["Automation", "Saas", "Warehousing"],
      link: "/",
      primary: false,
    },
    {
      logo: "/medical.svg",
      title: "My IMC",
      description:
        "A convenient clinical app with 50k+ downloads for patients to book appointments withdoctors and manage medical history from anywhere, anytime.",
      badge: ["Mobile App", "HealthTech", "Data Management"],
      link: "/",
      primary: false,
    },
    {
      logo: "/mediacl-primary.svg",
      title: "IMC Women’s Health",
      description:
        "A personalized clinical app for women housed by board-certified gynaecologists for both routine checkups and specialized care.",
      badge: ["Mobile App", "HealthTech", "Data Management"],
      link: "/",
      primary: true,
    },
    {
      logo: "/sales-support.svg",
      title: "Sales Support",
      description:
        "We’ve created an immaculate Amazon Wholesale Kickstarter that helped launch 1000+ businesses on Amazon. The platform features a Repricer for automated pricing and a catalog analyzer for better forecasting and profit/loss analysis. While the reimbursements removal and FBA forecasting elevated their business off the ground.",
      badge: ["Automation", "Saas", "Warehousing"],
      link: "/",
      primary: true,
    },
    {
      logo: "/one-apply.svg",
      title: "One App",
      description:
        "We developed a powerful E-commerce marketplace that manages the daily inventory and stock data of above 50 different stores. The automated & algorithmic Repricer allows optimal order management, total control over centralized accounts, better profit/loss calculation, & reliable FBA forecasting.",
      badge: ["E-commerce", "Automation", "SaaS"],
      link: "/",
      primary: false,
    },
    {
      logo: "/tripexpert.svg",
      title: "Tripexpert",
      description:
        "We offered maintenance and support to a hefty travel experience expert for a faster-loading website amid massive data operations. We introduced booking.com, Agoda, and ElasticSearc as reliable integrations to enable easy search. While data scraping improved overall platform performance. ",
      badge: ["Maintenance & Support", "Integrations", "Data Scraping", "Travel"],
      link: "/",
      primary: false,
    },
  ];


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
          wrapper.style.transform = "translateX(-32%)";
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
      const slice = width > 1400 ? 3 : 2;
      setColumnSlice(slice);
    }
  }, [columnSlice, width]);

  const renderColumns = () => {
    const columns = [];
    for (let i = 0; i < stories.length; i += columnSlice ) {
      const columnSet = stories.slice(i, i + columnSlice)
      const columnElements = columnSet.map((item, index) => (
        <div className={`column ${item.primary ? "primary" : ""} ${columnSlice === 2 ? "w-50" : ""}`} key={index}>
          <div className="column-inner">
            <div className="column-inner-right">
              <img className="logo" src={item.logo} />
              <h3>{item.title}</h3>
              <p className="paragraph">{item.description}</p>
              <div className="badge">
                {item.badge.map((badge) => (
                  <span>{badge}</span>
                ))}
              </div>
              <PrimaryButton text="View Details" color={i == 2 ? "#fff" : ""} />
            </div>
            <div className="column-inner-left">
              <img src="/ecom-circle.png" className="image-logo" alt="no-image" />
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
        <h1 className="color-primary">Our Success Stories</h1>
        <p>Our Success Stories Innovators from across the industry have trusted Qbatch to build high-impact products</p>
        {renderColumns()}
      </Container>
    </DemoServiceWrapper>
  );
};

export default Index;
