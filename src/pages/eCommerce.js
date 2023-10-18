import React from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout/layout";
import StartProject from "../components/PagesComponent/StartProject";
import WhatCanHelp from '../components/PagesComponent/WhatCanYouHelp/index'
import BusinessMangement from '../components/PagesComponent/BusinessMangement/index'

const Ecommerce = () => {
  return (
    <Layout>
      <WhatCanHelp />
      <BusinessMangement />
      <StartProject />
    </Layout>
  );
}
export const Head = () => <SEO title="ecommerce" />;

export default Ecommerce;
