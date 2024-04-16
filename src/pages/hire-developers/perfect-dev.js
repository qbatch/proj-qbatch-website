import React from "react";
import Container from "../../components/UiComponent/Container";
import Dev from "../../../static/devs-img.png";
import Devs from "../../../static/right-img.svg";
import Devss from "../../../static/left-img.svg";
import Button from "../../components/UiComponent/Button";
import { PerfectDevStyleWrapper } from "./style";

const PerfectDev = () => {

  const DevData = [
    {
      img: <><img className="responsive-image" src={Dev} /> <img className="image-wrapper" src={Devss} /></>,
      heading:'Dev replacement guarantee',
      text:' Developers missing deadlines? We will provide you with additional resources without changing your project deadline or cost. Our retention rate is high, but just in case.'
    },
    {
      img: <><img className="responsive-image" src={Dev} /> <img className="image-wrapper" src={Devs} /></>,
      heading:'Comprehensive weekly reports',
      text:' Developers missing deadlines? We will provide you with additional resources without changing your project deadline or cost. Our retention rate is high, but just in case.'
    },
    {
      img: <><img className="responsive-image" src={Dev} /> <img className="image-wrapper" src={Devss} /></>,
      heading:'On-the-go support',
      text:' Developers missing deadlines? We will provide you with additional resources without changing your project deadline or cost. Our retention rate is high, but just in case.'
    },
    {
      img: <><img className="responsive-image" src={Dev} /> <img className="image-wrapper" src={Dev} /></>,
      heading:'Total product mindset',
      text:' Developers missing deadlines? We will provide you with additional resources without changing your project deadline or cost. Our retention rate is high, but just in case.'
    },
  ]

  return (
    <PerfectDevStyleWrapper>
        <Container>
        <h2>Become Invincible With Your Perfect Devs </h2>
        <p>We offer convenience, flexibility,  and transparency. How?</p>
        <div className="perfect-devs-overlay">
          {DevData.map((item,index) => (
            <div key={index} className="perfect-devs-wrapper">
                {item.img}
            <div className="perfect-devs-item">
              <h3>{item.heading}</h3>
              <p>
              {item.text}
              </p>
            </div>
          </div>
          ))}
          <Button className="get-a-query-btn" text="Get a Query" />
        </div>
    </Container>
      </PerfectDevStyleWrapper>
  );
};

export default PerfectDev;
