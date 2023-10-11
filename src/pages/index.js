import * as React from "react";
// components for home page
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import DedicatedDevelopment from "../components/PagesComponent/DedicatedDeveloper";
import Achievements from "../components/PagesComponent/Achievements";
import WhatWeCanDo from "../components/PagesComponent/WhatWeCanDo";
import Expertise from "../components/PagesComponent/Expertise";
import ProblumSolving from "../components/PagesComponent/ProblumSolving";
import ProvenWorkExperience from "../components/PagesComponent/ProvenWorkExperience";
import HappilyMaking from "../components/PagesComponent/MakingIndustries";
import WhatDifferenceQbatchMaking from "../components/PagesComponent/WhatDifferenceQbatchMaking";
import Collaboration from "../components/PagesComponent/Collaboration";
import Awards from "../components/PagesComponent/Awards";
import CreativeIntelligence from "../components/PagesComponent/CreativeIntelligence";
import StartProject from "../components/PagesComponent/StartProject";

const IndexPage = () => (
  <Layout>
    <DedicatedDevelopment />
    <Achievements page="home" />
    <WhatWeCanDo />
    <Expertise />
    <ProblumSolving
      text={
        <p className="text-h2 quote">
          We go beyond traditional problem-solving techniques and old-fashioned
          promises to assist visionaries like you to transform on a massive
          scale<br></br> — <b>with logic, innovation and emotion.</b>
        </p>
      }
    />
    <ProvenWorkExperience />
    <HappilyMaking />
    <WhatDifferenceQbatchMaking />
    <Awards maxCols={8} />
    <Collaboration />
    <CreativeIntelligence />
    <StartProject />
  </Layout>
);

export const Head = () => <SEO title="Home Page" />;

export default IndexPage;
