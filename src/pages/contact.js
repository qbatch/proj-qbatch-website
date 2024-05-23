import React, { useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Queries } from "../constants/queries";
import styled from "styled-components";

import { media } from '../theme/media-mixins';
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import StartProject from "../components/PagesComponent/StartProject";
import Achievements from "../components/PagesComponent/Achievements";
import ProvenWorkExperience from "../components/PagesComponent/ProvenWorkExperience";
import ProblemSolving from "../components/PagesComponent/ProblumSolving";
import Breadcrumb from '../components/PagesComponent/Breadcrumb';

const ContactUs = () => {
  const crumbs = [
    { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' },
    { pathname: '/privacy-policy/', crumbLabel: 'Privacy Policy' }
  ];
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 500)
  }, [])

  return (
    <Layout pageTitle="Contact Us">
     <Breadcrumb crumbs={crumbs} wrapperClass="inner-page"/>
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
  const blogQuery = Queries()
  const seoData = blogQuery.allStrapiContactUs.nodes[0]?.seo
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={seoData.slug}
      image={seoData.metaimage[0].localFile.url}
    />
  )
}

export default ContactUs;
