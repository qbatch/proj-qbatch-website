import React, { useEffect } from "react";
import DemoServiceWrapper from "./style";
import ExpandableView from "./style";
import PrimaryButton from "../../UiComponent/PrimaryButton";

import Container from "../../UiComponent/Container";


const Index = () => {
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
        "A convenient clinical app with 50k+ downloadsfor patients to book appointments withdoctors and manage medical history from anywhere, anytime.",
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
      logo: "/ecom-circle.svg",
      title: "IMC Women’s Health",
      description:
        "A personalized clinical app for women housed by board-certified gynaecologists for both routine checkups and specialized care.",
      badge: ["Amazon", "Saas", "Platform Management", "Web App"],
      link: "/",
      primary: false,
    },
  ];
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

    for (let i = 0; i < stories.length; i += 3) {
      const columnSet = stories.slice(i, i + 3);

      const columnElements = columnSet.map((item, index) => (
        <div className={`column ${item.primary ? "primary" : ""}`} key={index}>
          <div className="column-inner">
            <div className="column-inner-left">
              <img src="/ecom-circle.png" className="image-logo" alt="no-image" />
            </div>
            <div className="column-inner-right">
              <div className="services-inner-content">
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
    <DemoServiceWrapper>
      <Container>
        <h1 className="color-primary heading">Our Success Stories</h1>
        <p className="main-paragraph">Our Success Stories Innovators from across the industry have trusted Qbatch to build high-impact products</p>
        <div className="services-wrapper">
          {renderColumns()}
        </div>
      </Container>
    </DemoServiceWrapper>
  );
};

export default Index;