import * as React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import StartProject from '../components/PagesComponent/StartProject';
const Contact = () => (
  <Layout>
    <StartProject />
  </Layout>
)

export const Head = () => <SEO title="Contact Us" />;

export default Contact;
