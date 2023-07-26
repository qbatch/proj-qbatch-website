import * as React from "react";

// components
import Layout from "../components/Layout/layout";
import { SEO } from "../components/Seo";
import DedicatedDevelopment from "../components/PagesComponent/DedicatedDeveloper";
import Achievements from "../components/PagesComponent/Achievements/index";
import WhatWeCanDo from "../components/PagesComponent/WhatWeCanDo";

const IndexPage = () => {
  return (
    <Layout>
      <DedicatedDevelopment />
      <Achievements />
      <WhatWeCanDo />
    </Layout>
  );
};

export const Head = () => <SEO title="Home Page" />;

export default IndexPage;
