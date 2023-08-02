import * as React from "react";

// components
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import DedicatedDevelopment from "../components/PagesComponent/DedicatedDeveloper";
import Achievements from "../components/PagesComponent/Achievements/index";
import WhatWeCanDo from "../components/PagesComponent/WhatWeCanDo";
import Expertise from "../components/PagesComponent/Expertise";
import ProblumSolving from "../components/PagesComponent/ProblumSolving";
import ProvenWorkExperience from "../components/PagesComponent/ProvenWorkExperience";
import HappilyMaking from '../components/PagesComponent/MakingIndustries'
import WhatDifferenceQbatchMaking from "../components/PagesComponent/WhatDifferenceQbatchMaking";
import Collaboration from "../components/PagesComponent/Collaboration";
import Awards from "../components/PagesComponent/Awards";
import CreativeIntelligence from "../components/PagesComponent/CreativeIntelligence";
import StartProject from '../components/PagesComponent/StartProject'

const IndexPage = () => {
  return (
    <Layout>
      <DedicatedDevelopment />
      <Achievements />
      <WhatWeCanDo />
      <Expertise />
      <ProblumSolving />
      <ProvenWorkExperience />
      <HappilyMaking />
      <WhatDifferenceQbatchMaking />
      <Awards/>
      <Collaboration />
      <CreativeIntelligence/>
      <StartProject />
    </Layout>
  );
};

export const Head = () => <SEO title="Home Page" />;

export default IndexPage;
