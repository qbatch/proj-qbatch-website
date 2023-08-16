<<<<<<< HEAD
import * as React from 'react'
import Layout from '../components/Layout/layout'
import SEO from "../components/Seo";
import StartProject from '../components/PagesComponent/StartProject'
import Achievements from "../components/PagesComponent/AchievementsContact";
import ProvenWorkExperience from "../components/PagesComponent/ProvenWorkExperience";
import ProblemSolving from "../components/PagesComponent/ProblumSolving";

const ContactUs = () => {
  return (
    <Layout pageTitle="Contact Us">
      <StartProject/>
      <Achievements/>
      <ProvenWorkExperience/>
      <ProblemSolving className="contact-project-cost" text={<h1 className="heading-break">
            Wondering how much
            your project would cost?
            </h1>}/>
    </Layout>
  )
}

export const Head = () => <SEO title="Contact Us" />;

export default ContactUs
=======
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
>>>>>>> 89084739215b9dcc8dbb453bef865340b88c706a
