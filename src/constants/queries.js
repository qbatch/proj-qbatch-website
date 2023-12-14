import { useStaticQuery, graphql } from 'gatsby';

export const Queries = () => {
   const data = useStaticQuery(graphql`
     query BlogQuery {
       allStrapiBlog {
         nodes {
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
           }
         }
       }
       allStrapiArticle {
         nodes {
           blogTitle
           blogDescription {
             data {
               blogDescription
             }
           }
           bottomDescription {
             data {
               bottomDescription
             }
           }
           user {
             username
           }
           category {
             categoryName
           }
           blogTags {
             strapi_json_value
           }
           blogImg {
             localFile {
               url
             }
           }
           id
           publishedAt
           favorite
           bannerBlog
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
           }
         }
       }
     }
   `)
    
    return data;
  }
  