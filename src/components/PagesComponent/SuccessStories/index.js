import React, { useEffect, useRef, useState } from "react";
import StoriesWrapper from "./style";
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
  {
    logo: "/blueware-discount.svg",
    title: "Bluewarehouse discounts",
    description:
      "We elevated business experience for leading warehouse merchandise with hybrid app development for trackable product management and ShipsStation software for convenient order management.",
    badge: ["Hybrid App", "Integrations", "E-commerce", "B2c"],
    link: "/",
    primary: false,
  },
  {
    logo: "/northware.svg",
    title: "Northaware",
    description:
      "We tailored a high-quality E-commerce platform that caters to the winter clothing needs of Canadian snowbirds. The platform uses a Shopify CMS for a versatile custom development solution for increased customer engagement and retention.",
    badge: ["Custom Software Development", "CMS", "Shopify+"],
    link: "/",
    primary: false,
  },
  {
    logo: "/store-filter.svg",
    title: "Store Filter",
    description:
      "We developed a witty searchable database for eCom agencies, Shopify store owners, and Brokers to know everything their competitors are doing and earn a competitive edge. The app enables real-time reporting on your competition's marketing efforts.",
    badge: ["Database", "Data Analytics", "Web App+"],
    link: "/",
    primary: false,
  },
  {
    logo: "/birch-fog.svg",
    title: "Brich+Fog",
    description:
      "Fortunate enough to build North America's only anti-anxiety brand that offers full-family CBD and plant-based, and holistic health solutions and products.",
    badge: ["Database", "Data Analytics", "Web App+"],
    link: "/",
    primary: false,
  },
  {
    logo: "/eliven-health.svg",
    title: "Enlivened Health",
    description:
      "A credible Online Dispensary platform for doctors to avail professional-grade products integrated with automated calculations and payments system eliminating hassle and upfront costs.",
    badge: ["Automation", "Web App", "HealthTech"],
    link: "/",
    primary: false,
  },
  {
    logo: "/keurig.svg",
    title: "Keurig",
    description:
      "We’ve helped launch an intuitive E-commerce business management platform for the biggest beverage company in North America with 150+ principal warehouses. The mobile app offers easy grocery and product delivery services with over 100K+ downloads.",
    badge: ["Mobile App", "HealthTech", "Data Management"],
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
      const slice = width > 1400 ? 3 : width < 991 ? 1 : 2 ;
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
