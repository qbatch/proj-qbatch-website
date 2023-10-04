<<<<<<< HEAD
import * as React from 'react'
import Layout from '../components/Layout/layout'
import SEO from "../components/Seo";
import { graphql } from 'gatsby'


const BlogPage = () => {
    
  return (
    <Layout pageTitle="My Blog Posts">
    </Layout>
  )
}
=======
import * as React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";

const BlogPage = () => {
  return <Layout pageTitle="My Blog Posts"></Layout>;
};
>>>>>>> 825427cf2f760a7d7205c89d0fb42651baadac58
export const Head = () => <SEO title="My Blog Posts" />;

export default BlogPage;
