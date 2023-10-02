import React from 'react';

import SEO from '../components/Seo';
import Layout from '../components/Layout/layout';
import StartProject from '../components/PagesComponent/StartProject';
import CtoBanner from '../components/PagesComponent/CtoBanner';

const CtoService = () => {
  return (
    <Layout>
      <CtoBanner />
      <StartProject />
    </Layout>
  )
}
export const Head = () => <SEO title="Cto as a Service" />;


export default CtoService;