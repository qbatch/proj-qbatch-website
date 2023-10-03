import React from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout/layout";
import StartProject from "../components/PagesComponent/StartProject";
import CtoBanner from "../components/PagesComponent/CtoBanner";
import HireCto from "../components/PagesComponent/HireCto/index";
import TechnicalExcellence from "../components/PagesComponent/TechnicalExcellence";
import TechnicalGuidance from "../components/PagesComponent/TechnicalGuidance";

const CtoService = () => {
  return (
    <Layout>
      <CtoBanner />
      <HireCto />
      <TechnicalExcellence />
      <TechnicalGuidance />
      <StartProject />
    </Layout>
  );
};
export const Head = () => <SEO title="Cto as a Service" />;

export default CtoService;
