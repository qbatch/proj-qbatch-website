import * as React from 'react'
import Layout from '../components/Layout/layout'
import SEO from "../components/Seo";
import StartProject from '../components/PagesComponent/StartProject'
import Achievements from "../components/PagesComponent/AchievementsContact";
import ProvenWorkExperience from "../components/PagesComponent/ProvenWorkExperience";
import ProblemSolving from "../components/PagesComponent/ProjectCost";

const ContactUs = () => {
  return (
    <Layout pageTitle="Contact Us">
      <StartProject/>
      <Achievements/>
      <ProvenWorkExperience/>
      <ProblemSolving/>
    </Layout>
  )
}

export const Head = () => <SEO title="Contact Us" />;

export default ContactUs