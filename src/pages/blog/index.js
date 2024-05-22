import React, { useState } from "react";
import { useLocation } from '@reach/router';
import {navigate } from 'gatsby';

import Layout from "../../components/Layout/layout";
import SEO from "../../components/Seo";
import BlogBanner from "../../components/PagesComponent/BlogBanner";
import SearchInput from "../../components/UiComponent/SearchInput";
import BlogAll from "../../components/PagesComponent/BlogAll";
import BlogCards from "../../components/PagesComponent/BlogCards";
import Container from "../../components/UiComponent/Container";
import  { Queries }  from "../../constants/queries";

const BlogPage = ({ pageContext }) => {
  const location = useLocation()
  const { title } = pageContext;
  const [activeTab, setActiveTab] = useState(title);
  const [searchTerm, setSearchTerm] = useState('');

  const blogArticle = Queries()

  const blogData = blogArticle.allStrapiArticle.nodes;
  const stagingEnv = process.env.GATSBY_ENV !== "staging"

  const draftData = blogData.filter((item)=> item.publishedAt !== null);
  const filteredData = stagingEnv ? draftData : blogData?.filter((item) => item.blogTitle.toLowerCase().includes(searchTerm.toLowerCase()));

  const uniqueCategories = (stagingEnv ? draftData : blogData)?.reduce((acc, obj) => {
    if (!acc.find((item) => item.category?.categoryName === obj.category?.categoryName)) {
      acc.push(obj)
    }
    return acc
  }, [])

  uniqueCategories?.sort((a, b) => (a.category === 'ALL' ? -1 : b.category === 'ALL' ? 1 : 0))
  function capitalizeFirstLetter(str) {
    return str?.charAt(0).toUpperCase() + str?.slice(1)
  }

  return (
    <Layout>
      <BlogBanner />
      <Container>
        <div className="position-relative">
          <div className="tabs d-flex flex-column gap-2">
            <div className="d-flex gap-2 flex-wrap">
              <button
                className={`tabs-buttons ${location.pathname === '/blog/' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('all')
                  navigate('/blog/')
                }}
              >
                All
              </button>
              {uniqueCategories?.map((tabs) => {
                return (
                  <>
                    <button
                      className={`tabs-buttons ${activeTab === tabs.category?.categoryName ? 'active' : ''}`}
                      onClick={() => {
                        setActiveTab(tabs.category?.categoryName)
                        navigate(`/blog/${tabs.category.slug}`)
                      }}
                    >
                      {capitalizeFirstLetter(tabs.category?.categoryName)}
                    </button>
                  </>
                )
              })}
            </div>
            <div>
              {location.pathname === '/blog/' ? (
              filteredData &&  <BlogAll data={filteredData} />
              ) : (
               filteredData && <BlogCards heading={activeTab} data={filteredData} /> 
              )}
            </div>
          </div>
          <div className="position-absolute end-0 top-0">
            <SearchInput onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export const Head = () => {
  const location = useLocation();
  const blogSeo = Queries();

  const categoryPath = location.pathname.split('/')[2];

  const categoryData = blogSeo.allStrapiCategory.nodes;
  const categoryFilter = categoryData.filter((item) => item.slug === categoryPath);
  const seoData = categoryPath ? categoryFilter[0]?.seo : blogSeo.allStrapiBlog.nodes[0]?.seo
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData?.metaDescription}
      keywords={seoData?.keywords}
      language={seoData?.language}
      robots={seoData?.metaRobots}
      pathname={location.pathname}
    />
  )
}

export default BlogPage;
