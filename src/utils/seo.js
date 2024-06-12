import React from 'react';
import SEO from '../components/Seo';
import { replaceUnderscoreWithAt } from '../constants/Utils';

const removeNullValues = (obj) => {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
};

const SeoComponent = ({ seoData, schemaData }) => {
  
  const transformedObject = replaceUnderscoreWithAt(schemaData);
 

  const filteredObject = transformedObject
    .filter(x => x && x.visibilityIn && x.childStrapiComponentSchemaSchemaStructureddataJsonnode)
    .map(x => ({
      ...x,
      childStrapiComponentSchemaSchemaStructureddataJsonnode: removeNullValues(x.childStrapiComponentSchemaSchemaStructureddataJsonnode)
    }));
    console.log(filteredObject);

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
      {filteredObject.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)}
        </script>
      ))}
    </SEO>
  );
};

export default SeoComponent;
