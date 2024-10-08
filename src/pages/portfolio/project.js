import React from 'react';
import Layout from '../../components/Layout/layout';
import SEO from '../../components/Seo';
import PageNotFound from '../../pages/404';
import ProjectBanner from '../../components/PagesComponent/ProjectBanner';
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import StartProject from "../../components/PagesComponent/StartProject";
import CompanyOverview from '../../components/PagesComponent/CompanyOverview';
import ProjectChallenges from '../../components/PagesComponent/ProjectChallenges';
import ProjectImpact from '../../components/PagesComponent/ProjectImpact';
import { ProjectQuote, ProjectCover } from '../../components/PagesComponent/ProjectQuote';
import ProjectAssets from '../../components/PagesComponent/ProjectAssets';
import ProjectTimeline from '../../components/PagesComponent/ProjectTimeline';
import SuccessStories from '../../components/PagesComponent/SuccessStoriesNew';
import { weWorkStoriesData } from '../../constants';

const Portfolio = ({ pageContext }) => {
  const { portfolio } = pageContext;
  const { projectComponents } = pageContext;
  if (!portfolio) {
    return <PageNotFound />;
  }

  const { mainHeading, subHeading, detail, companySize, team, industry, duration, useCase, cover, headQuarter } = portfolio;
  const coverImageUrl = cover?.localFile?.url;

  return (
    <Layout>
      <ProjectBanner
        subHeading={subHeading}
        mainHeading={mainHeading}
        detail={detail}
        coverImage={coverImageUrl}
      />
      <CompanyOverview
        companySize={companySize}
        team={team}
        industry={industry}
        duration={duration}
        useCase={useCase}
        headQuarter={headQuarter}
      />
      <ProjectImpact projectImpact={pageContext.projectImpact} />
      <ProjectChallenges projectDetails={pageContext.projectDetails} />
      <ProjectTimeline phases={pageContext.phaseTimeline.timeline} steps={pageContext.phaseTimeline.phase} />
      <ProjectAssets projectData={projectComponents} />
      <ProjectCover cover={pageContext.projectCover} />
      <ProjectQuote quote={pageContext.projectQuote} />
      <SuccessStories data={weWorkStoriesData} />
      <StartProject />
    </Layout>
  );
};

export const Head = ({ pageContext }) => {
  console.log('seo', pageContext?.seoData?.slug)
  return (
    <SEO
      title={pageContext?.seoData?.metaTitle}
      description={pageContext?.seoData?.metaDescription}
      lang={pageContext?.seoData?.language}
      keywords={pageContext?.seoData?.keywords}
      metaImage={pageContext?.seoData?.metaImage?.localFile?.url || ''}
      pathname={`/portfolio/${pageContext?.seoData?.slug}/`}
    />
  )
}

export default Portfolio;
