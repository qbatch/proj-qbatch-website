import * as React from "react";
// components
import Layout from "../components/Layout/layout";
import { SEO } from "../components/Seo";
import DedicatedDevelopment from "../components/PagesComponent/DedicatedDeveloper";

const IndexPage = () => {
  return (
    <Layout>
      <DedicatedDevelopment />
    </Layout>
  );
};

export const Head = () => <SEO title="Home Page" />;

export default IndexPage;
