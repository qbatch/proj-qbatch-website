import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const DuplexComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDuplexComponent {
        nodes {
          internalName
          containerLayout
          headline
          bodyText {
            raw
          }
          image {
            file {
              url
            }
            title
          }
          imageStyle
        }
      }
    }
  `);
const rawJSON =
  '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Get up to 3% of your cash back whenever you use the Coin card to pay for the purchases. There is no limit on rewards you can claim and no spendi"}]}]}';

const parsedJSON = JSON.parse(rawJSON);

const desiredValue = parsedJSON.content[0].content[0].value;

  const duplexContent = data.allContentfulDuplexComponent.nodes;
    console.log(duplexContent, "duplexContent");
  return (
    duplexContent.map((content,index)=>{
      return (
        <div>
          <h1>{content.internalName}</h1>
          <h2>{content?.headline}</h2>
          <p>{content.desiredValue}</p>
          <img src={content?.image.file.url} width="300px" alt={content.image.title} />
          {console.log(content)}
        </div>
      );
    })
 
  );
};

export default DuplexComponent;
