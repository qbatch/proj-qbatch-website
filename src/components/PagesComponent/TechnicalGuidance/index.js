import React, { useCallback, useEffect, useState } from "react";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import TechnicalGuidanceWrapper from "./style";

const guidanceData = [
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Vision and Future \n Alignment",
    desc: "Build a roadmap that elevates your technical strategy, objectives, and operations to achieve a holistic digital footprint powering associated people, processes, and possibilities with our CTO consulting services. Let’s turn your vision into victory.",
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Leading and Scaling \n Teams",
    desc: "Your development team decides and shapes the future of the entire business. Thus we keep the bar high when it comes to tech leadership and management. Enjoy proficient team management, process optimization, and daily reporting with our CTO services.",
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Strategic Procurement and \n Cost Optimization",
    desc: 'Technology expenses can quickly escalate if the"build vs. buy" analysis goes wrong with suppliers and vendors. Our CTO advisory services develop a problem-solution fit by running iterations and finding critical areas that truly require investment. ',
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Technical Audits, Due Diligence, and Change Management",
    desc: "We dive deeper into the technical risks associated with your business processes and strategy, conduct audits, prepare you for due diligence, and prescribe rock-solid change management roadmaps toward total digital transformation and delivery across the company.",
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "System Engineering and \n Design",
    desc: "You cannot fully grasp the technical aspects of a software product if you lack technical depth and knowledge. Leverage our CTO expertise and insight to demonstrate, develop, and design low-risk and hi-tech enterprise systems",
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Technology Integration and \n Analysis",
    desc: "Discover whether your business requires technical fixing or a total overhaul to assure zero downtime, accessibility, and enterprise-wide information exchanges. Eliminate software bloat and build technical resilience with our impeccable CaaS providers.",
  },
];

const Index = () => {
  const isBrowser = typeof window !== "undefined";
  const [windowWidth, setWindowWidth] = useState(
    isBrowser ? window.innerWidth : 0
  );
  const [horLength, setHorLength] = useState(0);
  const [distFromTop, setDistFromTop] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    if (!isBrowser) return false;

    const updateWindowSize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, [isBrowser]);

  useEffect(() => {
    const elementWrapper = document.querySelector(".element-wrapper");
    const horizontalSection = document.querySelector(".horizontal-section");

    if (elementWrapper && horizontalSection) {
      setHorLength(elementWrapper.scrollWidth);
      setDistFromTop(horizontalSection.offsetTop);
      setScrollDistance(distFromTop + horLength - windowWidth);
      horizontalSection.style.height = horLength - 850 + "px";
    }
  }, [windowWidth, horLength, distFromTop]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
      const translateX = scrollTop - distFromTop;
      document.querySelector(
        ".element-wrapper"
      ).style.transform = `translateX(-${translateX}px)`;
    }
  }, [distFromTop, scrollDistance]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <TechnicalGuidanceWrapper>
      <div className="horizontal-section">
        <div className="sticky-wrapper">
          <Container>
            <div className="d-flex align-items-start justify-content-between flex-wrap guidance-heading">
              <h2>
                More Than Just “Technical Guidance” Explore Our Enterprise-level{" "}
                <span>CTO Services</span>
              </h2>
              <div className="mt-2">
                <Button text="Let’s Get Started" />
              </div>
            </div>
          </Container>
          <div className="element-wrapper">
            {guidanceData.map((data, ind) => (
              <div className="guidance-card" key={ind}>
                <img
                  src={data.icon}
                  alt="card icon"
                  width="64px"
                  height="64px"
                />
                <h4>{data.title}</h4>
                <span>{data.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TechnicalGuidanceWrapper>
  );
};

export default Index;
