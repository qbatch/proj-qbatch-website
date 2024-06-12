import React from 'react';
import SEO from '../components/Seo'
import { replaceUnderscoreWithAt } from '../constants/Utils';

const SeoComponent = ({ seoData, schemaData }) => {
  const transformedObject = replaceUnderscoreWithAt(schemaData);

  return (
    <SEO
      title={seoData.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      image={seoData.metaimage[0].localFile.url}
      pathname={`/services${seoData.slug}`}
    >
      {transformedObject
        .filter((x) => x.visibilityIn)
        .map((data, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)}
          </script>
        ))}
    </SEO>
  );
};

export default SeoComponent;
