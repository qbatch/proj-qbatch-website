import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import StaticPage from "../components/PagesComponent/StaticPage";

const TermsAndConditions = () => {
  const data = useStaticQuery(graphql`
    query TermsQuery {
      allStrapiTermsAndConditionContentTextnode {
        nodes {
          content
        }
      }
    }
  `);
  const termsData = data.allStrapiTermsAndConditionContentTextnode.nodes[0];

  return (
    <Layout>
      <StaticPage data={termsData} />
    </Layout>
  );
};

export default TermsAndConditions;
