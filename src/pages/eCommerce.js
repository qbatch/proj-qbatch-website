import React from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout/layout";
import StartProject from "../components/PagesComponent/StartProject";
import EcomLogoSection from "../components/PagesComponent/EcomLogoSection";
import DevelopmentStages from "../components/PagesComponent/DevelopmentStages";
import { ecomSliderItems } from "../constants";

const Ecommerce = () => {
  return (
    <Layout>
      <EcomLogoSection />
      <DevelopmentStages
        heading="Our 5-Step E-commerce Automation Process"
        desc="To help you stand your ground in the ever-growing e-commerce district!"
        sliderData={ecomSliderItems}
        col1={5}
        col2={7}
        subCol1={6}
        subCol2={6}
        mt="mt-4"
        className="ecom-section"
      />
      <StartProject />
    </Layout>
  );
};
export const Head = () => <SEO title="ecommerce" />;

export default Ecommerce;
