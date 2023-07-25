import * as React from "react";

import Layout from "../components/Layout/layout";
import { SEO } from "../components/Seo";
import Achievements from "../components/Achievements";

const IndexPage = () => {
  return (
    <Layout>
      <Achievements />
    </Layout>
  );
};

export const Head = () => <SEO title="Home Page" />;

export default IndexPage;
