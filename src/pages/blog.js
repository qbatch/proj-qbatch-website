import React, { useState } from "react";
import Layout from "../components/Layout/layout";
import {navigate } from 'gatsby'
import SEO from "../components/Seo";
import BlogBanner from "../components/PagesComponent/BlogBanner";
import SearchInput from "../components/UiComponent/SearchInput";
import BlogAll from "../components/PagesComponent/BlogAll";
import BlogCards from "../components/PagesComponent/BlogCards";
import Container from "../components/UiComponent/Container";
import  { Queries }  from "../constants/queries";

const BlogPage = ({ pageContext }) => {
  
  const { title } = pageContext;
  const [activeTab, setActiveTab] = useState(title || 'All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogArticle = Queries()
  const blogData = blogArticle.allStrapiArticle.nodes;
  const filteredData = blogData.filter((item) => item.blogTitle.toLowerCase().includes(searchTerm.toLowerCase()));
   
  blogData.sort((a, b) => {
  if (a.category.categoryName === 'All') return -1 
  if (b.category.categoryName === 'All') return 1 
  return a.category.categoryName.localeCompare(b.category)
})

  return (
    <Layout>
      <BlogBanner />
      <Container>
        <div className="position-relative">
          <div className="tabs d-flex flex-column gap-2">
            <div className="d-flex gap-2">
              {blogData.sort().map((tabs) => {
                return (
                  <>
                    <button
                      className={`tabs-buttons ${activeTab === tabs.category.categoryName ? 'active' : ''}`}
                      onClick={() => {
                        setActiveTab(tabs.category.categoryName)
                        navigate(`/blog/${tabs.category.categoryName}`)
                      }}
                    >
                      {tabs.category.categoryName}
                    </button>
                  </>
                )
              })}
            </div>
            <div>
              {blogData.map((tabs, id) => {
                return (
                  <>
                    <div
                      key={tabs.title}
                      style={{ display: activeTab === tabs.category.categoryName ? 'block' : 'none' }}
                    >
                      {tabs.category.categoryName === 'All' ? (
                        <BlogAll data={filteredData} />
                      ) : (
                        <BlogCards heading={tabs.category.categoryName} data={filteredData} />
                      )}
                    </div>
                  </>
                )
              })}
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
  const blogSeo = Queries();
  const seoData = blogSeo.allStrapiBlog.nodes[0]?.seo
  return (
    <SEO
      title={seoData.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={seoData.slug}
    />
  )
}

export default BlogPage;

