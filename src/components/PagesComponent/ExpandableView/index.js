import React from "react";
import ExpandableView from "./style";
import Container from "../../UiComponent/Container";

const Index = () => {
    const stories=[
        {
        logo:"/ecom-circle.svg",
        title:"Ecom Circles",
        description:"We created an all-in-one E-commerce Management Software trusted by 3000+ Amazon and Walmart sellers to organize and streamline their drop-shipping business.",
        badge:["Automation","Saas","Warehousing"],
        link:"/",
        },
    ]

  return (
    <Container>
      <ExpandableView>
        <div class="d-flex search-input">
            <h1 class="color-primary">Our Success Stories </h1>
            </div>
            <div class="wrap">
          <div class="item">
            
          {stories.map((story)=>{
              return (
                <div className="stories-box">
                  <img src={story.logo} />
                  <h3>{story.title}</h3>
                  <p className="paragraph">{story.description}</p>
                  <div className="badge">
                    {story.badge.map((badge) => (
                     <span >{badge}</span>
              ))}
              </div>
                </div>
              );
          })}
          </div>
        </div>
      </ExpandableView>
    </Container>
  );
};
export default Index;
