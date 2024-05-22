import React from "react";
import { navigate, Link } from 'gatsby'
import Container from "../../UiComponent/Container";
import Button from '../../UiComponent/HomeButton/index'

import { BannerWrapper, H1 } from "./style"

const Index = ({ customCrumbs }) => {
  const defaultHomeCrumb = { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' };
  const crumbs = customCrumbs && customCrumbs.length > 0 ? [defaultHomeCrumb, ...customCrumbs] : [defaultHomeCrumb];
  return (
    <BannerWrapper>
      <Container>
        {customCrumbs && (
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb">
              <ul className="d-flex gap-2 ps-0">
                {crumbs.map((crumb, index) => (
                  <li key={index}>
                    <Link className="pointer" to={crumb.pathname}>
                      <span>{crumb.crumbLabel}</span>
                      {index < crumbs.length - 1 && <span className="ps-1">{crumb.crumbSeparator}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="banner-headings">
          <H1>
            {["Team Spirit ", "Great Work ", "lasting Partnerships"].map((value, i) => <span key={i}>{value}</span>)}
          </H1>
          <p>
            As a close-knit team, we strive to create products that facilitate millions of people every
            day. We heavily focus on building high-potential teams that believe in deriving real and
            lasting human experience.
          </p>
        </div>
        <div className="banner-button">
          <Button text="Let’s Start Building" onClick={() => navigate('/contact')} className="secondary-btn" />
        </div>
      </Container>
    </BannerWrapper>
  )
}

export default Index;
