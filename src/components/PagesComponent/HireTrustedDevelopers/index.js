import React, { lazy } from "react";

import { HireTrustedDevelopersWrapper } from "./style";

const Container  = lazy(() => import("../../UiComponent/Container"));

const HireTrustedDevelopers = () => {
  return (
    <HireTrustedDevelopersWrapper>
      <Container>
        <div className="trusted-developer-wrapper">
          <h2>
            Hire Trusted Developers with Command of <span>200+</span> languages and
            frameworks
          </h2>
          <div className="card-ui-wrapper">
            <h3>Based on role/expertise</h3>
            <div className="data-list-wrapper">
              <ul>
                <li>Web</li>
                <li>Front-End</li>
                <li>DevOps</li>
                <li>Senior Engineers</li>
                <li>Architects</li>
                <li>Business Analysts</li>
                <li>Project Managers</li>
                <li>System Architects</li>
                <li>VP of Engineering</li>
              </ul>
              <ul>
                <li>Mobile</li>
                <li>Back-End</li>
                <li>Developers</li>
                <li>QA Engineers</li>
                <li>Product Designers</li>
                <li>Solution Architects</li>
                <li>App Developers</li>
                <li>Project Managers</li>
                <li>Tech Leads</li>
              </ul>
              <ul>
                <li>Cloud</li>
                <li>Full-Stack</li>
                <li>UX/UI Designers</li>
                <li>Director of Engineering</li>
                <li>Data Engineers & Analysts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="data-list-overlay-wrapper">
          <div className="card-ui-wrapper">
            <h3>Based on trending technology</h3>
            <div className="data-list-wrapper">
              <ul>
                <li>Angular</li>
                <li>Django</li>
                <li>iOS</li>
                <li>Android</li>
                <li>Vue</li>
                <li>Swift</li>
                <li>Express</li>
                <li>JavaScript</li>
                <li>Node.js</li>
              </ul>
              <ul>
                <li>AI</li>
                <li>CSS</li>
                <li>Rust</li>
                <li>MongoDB</li>
                <li>JSON</li>
                <li>Python</li>
                <li>Bootstrap</li>
                <li>Selenium</li>
                <li>React</li>
              </ul>
              <ul>
                <li>HTML</li>
                <li>Shopify</li>
                <li>Kotlin</li>
                <li>Go (Golang)</li>
                <li>SQL</li>
                <li>GraphQL</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>Google Cloud Platform</li>
              </ul>
              <ul>
                <li>React Native</li>
                <li>React.js</li>
                <li>Laravel</li>
                <li>React/Node</li>
                <li>TypeScript</li>
                <li>AWS</li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </div>
          <div className="card-ui-wrapper">
            <h3>Based on tech stack and languages</h3>
            <div className="data-list-wrapper">
              <ul>
                <li>Blockchain</li>
                <li>CMS</li>
                <li>Database</li>
                <li>E-Commerce</li>
                <li>Robotics</li>
                <li>Software Architects</li>
                <li>Retail & Supply Chain</li>
              </ul>
              <ul>
                <li>EdTech</li>
                <li>FinTech</li>
                <li>HealthTech</li>
                <li>On-Demand</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </HireTrustedDevelopersWrapper>
  );
};

export default HireTrustedDevelopers;
