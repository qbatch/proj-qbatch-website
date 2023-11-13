import React,{useState,useEffect} from "react";
import TextTransition, { presets } from 'react-text-transition';

import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container";

import { homeTiles } from "../../../constants/index";
import { DedicatedDeveloperWrapper, H1 } from "./style";

const Index = () => {
  const [contentChange,setContentChange]=useState(false)

    useEffect(() => {
      const intervalId = setInterval(() => {
        setContentChange(!contentChange)
      }, 6000)
      return () => {
        clearInterval(intervalId)
      }
    }, [contentChange])

  const enterprises="200+ enterprises have already garnered great financial results and market outreach with our time-tested development flow, error-free code quality, and on-time project delivery.";
  const stackHolder="If you are still stuck on old traditional business ways, take a break and switch to software-driven processes with out high-impact supply chain & logistics development & management solutions.";
  return (
    <DedicatedDeveloperWrapper>
      <img src="/banner-arrow-vector.svg" alt="banner-background" className="home-banner-bg" />
      <Container>
        <div className="title-portion">
          <div className="inner">
          <TextTransition springConfig={presets.molasses} direction="down">
            <span>
              <H1>
                <span className="hire position-relative">
                  {contentChange ? (
                    <>
                      100<span className="position-absolute add-space-top">+</span>
                    </>
                  ) : (
                    'hire'
                  )}
                </span>
                {contentChange ? 'Stakeholders Trusted Us' : 'Dedicated Developers'}
                <span className="for-furture">
                  {contentChange ? 'With Their Ideas & Investments,' : 'for a future'}{' '}
                  <span className="you-deserve fw-bold"> {contentChange ? 'Will You?' : 'You Deserve!'}</span>
                </span>
              </H1>
              <div className="inner-text">
                <p className="paragraph">{contentChange ? stackHolder : enterprises}</p>
              </div>
            </span>
            </TextTransition>
            <div className="d-flex justify-content-end">
              <Button text="Let’s Start a Project" className="mx-lg-0 mx-auto secondary-btn" />
            </div>
          </div>
        </div>
        <div className="text-center add-space">
          {homeTiles.map((value, i) => (
            <h3 className="divider-heading text-h4" key={i}>
              {value}
            </h3>
          ))}
        </div>
      </Container>
    </DedicatedDeveloperWrapper>
  )};

export default Index;

