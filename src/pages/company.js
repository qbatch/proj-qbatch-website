import * as React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import CompanyBanner from "../components/PagesComponent/CompanyBanner"
import GrowthPartner from "../components/PagesComponent/GrowthPartner"
import VisionMission from "../components/PagesComponent/VisionMission"
import CompanyAchievements from "../components/PagesComponent/CompanyAchievements"
import OurClients from "../components/PagesComponent/Clients"
import Leadership from "../components/PagesComponent/Leadership"
import ValueSystem from "../components/PagesComponent/ValueSystem"
import CompanyAwards from "../components/PagesComponent/CompanyAwards"
import Clients from "../components/PagesComponent/Careers"
const Company = () => (
  <Layout>
    <CompanyBanner/>
    <GrowthPartner/>
    <VisionMission/>
    <CompanyAchievements/>
    <OurClients/>
    <Leadership/>
    <ValueSystem/>
    <CompanyAwards/>
    <Clients/>
  </Layout>
)
export const Head = () => <SEO title="Company" />;

export default Company;