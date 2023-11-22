import * as React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import StartProject from "../components/PagesComponent/StartProject";
import Achievements from "../components/PagesComponent/Achievements";
import ProvenWorkExperience from "../components/PagesComponent/ProvenWorkExperience";
import ProblemSolving from "../components/PagesComponent/ProblumSolving";

const ContactUs = () => {
  return (
    <Layout pageTitle="Contact Us">
      <StartProject page="contact" />
      <Achievements page="contact" />
      <ProvenWorkExperience heading="Proven Work Experience" paragraph="They imagined it, we brought it to the world!" />
      <ProblemSolving
        className="contact-project-cost"
        text={<h2 className="text-h1 heading-break">Wondering how much your project would cost?</h2>}
      />
    </Layout>
  );
};
export const Head = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      allStrapiContactUs {
        nodes {
          seo {
            keywords
            metaDescription
            metaTitle
          }
        }
      }
    }
  `)
  const seoData = data.allStrapiContactUs.nodes[0]?.seo[0]
  return <SEO title={seoData.metaTitle} description={seoData.metaDescription} keyword={seoData.keywords} />
}

export default ContactUs;
