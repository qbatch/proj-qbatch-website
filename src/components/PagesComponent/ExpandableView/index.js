import React from "react";
import ExpandableView from "./style";
import Container from "../../UiComponent/Container";
import PrimaryButton from "../../UiComponent/PrimaryButton";

const Index = () => {
  const stories = [
    {
      logo: "/ecom-circle.svg",
      title: "Ecom Circles",
      description:
        "We created an all-in-one E-commerce Management Software trusted by 3000+ Amazon and Walmart sellers to organize and streamline their drop-shipping business.",
      badge: ["Automation", "Saas", "Warehousing"],
      link: "/",
    },
    {
      logo: "/ecom-circle.svg",
      title: "My IMC",
      description:
        "A convenient clinical app with 50k+ downloads for patients to book appointments withdoctors and manage medical history from anywhere, anytime.",
      badge: ["Automation", "Saas", "Warehousing"],
      link: "/",
    },
    {
      logo: "/ecom-circle.svg",
      title: "IMC Women’s Health",
      description:
        "A personalized clinical app for women housed by board-certified gynaecologists for both routine checkups and specialized care.",
      badge: ["Automation", "Saas", "Warehousing"],
      link: "/",
    },
  ];

  return (
    <Container>
      <ExpandableView>
        <div class="d-flex search-input">
          <h1 class="color-primary">Our Success Stories </h1>
        </div>
        <div class="wrap">
          {stories.map((story,i) => {
            return (
              <div className={`item ${i !== 2 ? "" : "item-primary"}`}>
                <div className="stories-box">
                  <div>
                    <img src="/ecom-circle.png" className="image-logo" alt="no-image" />
                  </div>
                  <div>
                    <img className="logo" src={story.logo} />
                    <h3>{story.title}</h3>
                    <p className="paragraph">{story.description}</p>
                    <div className="badge">
                      {story.badge.map((badge) => (
                        <span>{badge}</span>
                      ))}
                    </div>
                  </div>
                  <PrimaryButton text="View Details" color={i == 2 ? "#fff" : ""} />
                </div>
              </div>
            );
          })}
        </div>
        
      </ExpandableView>
    </Container>
  );
};
export default Index;
