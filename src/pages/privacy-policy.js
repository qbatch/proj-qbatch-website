import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import StaticPage from "../components/PagesComponent/StaticPage";


const PrivacyPolicy = () => {
  const data = useStaticQuery(graphql`
    query PrivacyQuery {
      allStrapiPrivacyPolicyContentTextnode {
        nodes {
          content
        }
      }
    }
  `);
  const privacyData = data.allStrapiPrivacyPolicyContentTextnode.nodes[0];

  return (
     <Layout>
        <StaticPage data={privacyData} />
     </Layout>
  );
};

export default PrivacyPolicy;
