import React from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout/layout";
import StartProject from "../components/PagesComponent/StartProject";

const Ecommerce = () => {
  return (
    <Layout>
      <StartProject />
    </Layout>
  );
}
export const Head = () => <SEO title="ecommerce" />;

export default Ecommerce;
