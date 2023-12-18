import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../../components/Layout/layout";
import Container from "../../components/UiComponent/Container";

import PrivacyWrapper from "./style";

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
      <PrivacyWrapper>
        <Container>
          <div
            dangerouslySetInnerHTML={{
              __html: privacyData?.content,
            }}
          />
        </Container>
      </PrivacyWrapper>
    </Layout>
  );
};

export default PrivacyPolicy;
