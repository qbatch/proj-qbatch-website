import React, { useState, useEffect, useCallback } from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import BlogWrapper from "./blogStyle";

const BlogPage = () => {
  const isBrowser = typeof window !== 'undefined';
  const [windowWidth, setWindowWidth] = useState(isBrowser ? window.innerWidth : 0);
  const [horLength, setHorLength] = useState(0);
  const [horLength2, setHorLength2] = useState(0);
  const [distFromTop, setDistFromTop] = useState(0);
  const [distFromTop2, setDistFromTop2] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [scrollDistance2, setScrollDistance2] = useState(0);

  useEffect(() => {
    if (!isBrowser) return false;

    const updateWindowSize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, [isBrowser]);

  useEffect(() => {
    const elementWrapper = document.querySelector(".element-wrapper");
    const elementWrapper2 = document.querySelector(".element-wrapper2");
    const horizontalSection = document.querySelector(".horizontal-section");
    const horizontalSection2 = document.querySelector(".horizontal-section2");


    if (elementWrapper && horizontalSection) {
      setHorLength(elementWrapper.scrollWidth);
      setDistFromTop(horizontalSection.offsetTop);
      setScrollDistance(distFromTop + horLength - windowWidth);
      horizontalSection.style.height = horLength + "px";
    }

    if (elementWrapper2 && horizontalSection2) {
      setHorLength2(elementWrapper2.scrollWidth);
      setDistFromTop2(horizontalSection2.offsetTop);
      setScrollDistance2(distFromTop2 + horLength2 - windowWidth);
      horizontalSection2.style.height = horLength2 + "px";
    }
  }, [windowWidth, horLength, horLength2, distFromTop, distFromTop2]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
      const translateX = scrollTop - distFromTop;
      document.querySelector(".element-wrapper").style.transform = `translateX(-${translateX}px)`;
    }

    if (scrollTop >= distFromTop2 && scrollTop <= scrollDistance2) {
      const translateX2 = scrollTop - distFromTop2;
      document.querySelector(".element-wrapper2").style.transform = `translateX(-${translateX2}px)`;
    }
    
  }, [distFromTop, distFromTop2, scrollDistance, scrollDistance2]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Layout pageTitle="My Blog Posts">
      <BlogWrapper>
        <div className="bumper"></div>
        <div className="horizontal-section">
          <div className="sticky-wrapper">
            <div className="element-wrapper">
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
            </div>
          </div>
        </div>

        <div className="bumper"></div>

        <div className="horizontal-section2">
          <div className="sticky-wrapper2">
            <div className="element-wrapper2">
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
              <div className="element"></div>
            </div>
          </div>
        </div>

        <div className="bumper"></div>
      </BlogWrapper>
    </Layout>
  );
};
export const Head = () => <SEO title="My Blog Posts" />;

export default BlogPage;
