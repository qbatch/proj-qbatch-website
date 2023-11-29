import React, { useState } from "react";
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import BlogBanner from "../components/PagesComponent/BlogBanner";
import Tabs from "../components/UiComponent/Tabs";
import SearchInput from "../components/UiComponent/SearchInput";
import BlogAll from "../components/PagesComponent/BlogAll";
import BlogCards from "../components/PagesComponent/BlogCards";
import Container from "../components/UiComponent/Container";
import { blogCardsData } from "../constants";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = blogCardsData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tabsData = [
    {
      eventKey: "all",
      title: "All",
      component: <BlogAll data={filteredData} />,
    },
    {
      eventKey: "technology",
      title: "Technology & Innovation",
      component: <BlogCards heading="Technology & Innovation" data={filteredData} />,
    },
    {
      eventKey: "software",
      title: "Software",
      component: <BlogCards heading="Software" data={filteredData} />,
    },
    {
      eventKey: "automation",
      title: "Automation",
      component: <BlogCards heading="Automation" data={filteredData} />,
    },
    {
      eventKey: "data",
      title: "Data",
      component: <BlogCards heading="Data" data={filteredData} />,
    },
    {
      eventKey: "leadership",
      title: "Leadership",
      component: <BlogCards heading="Leadership" data={filteredData} />,
    },
    {
      eventKey: "strategy",
      title: "Strategy & Process",
      component: <BlogCards heading="Strategy & Process" data={filteredData} />,
    },
    {
      eventKey: "developers",
      title: "For Developers",
      component: <BlogCards heading="For Developers" data={filteredData} />,
    },
    {
      eventKey: "outsourcing",
      title: "Outsourcing",
      component: <BlogCards heading="Outsourcing" data={filteredData} />,
    },
  ];
  
  return (
    <Layout>
      <BlogBanner />
      <Container>
        <div className="position-relative">
          <Tabs tabsData={tabsData} />
          <div className="position-absolute end-0 top-0">
            <SearchInput onChange={handleSearch} />
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export const Head = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allStrapiBlog {
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

  const seoData = data.allStrapiBlog.nodes[0]?.seo[0]
  
  return <SEO title={seoData.metaTitle} description={seoData.metaDescription} keyword={seoData.keywords} />
}

export default BlogPage;
