import React, { useState } from "react";

import Container from "../../UiComponent/Container";
import Collapse from "../../UiComponent/Collapse";
import Divider from '../../UiComponent/Divider';

import FaqWrapper from "./style";

const Index = () => {
  const [openItems, setOpenItems] = useState([]);

  const ctoBenefits = [
    "Technological expertise and guidance",
    "Strategic roadmap and execution",
    "Saves you money",
    "Change management and vision alignment",
    "Technology adoption and infrastructure development",
    "Unbiasted and objective analysis",
    "Access to industry community",
    "Initiatives and execution",
    "Risk management",
    "Focus on core technical areas",
  ];

  const frequentquestion = [
    {
      id: 1,
      title: "What is CTO as a Service, and how can it benefit my business?",
      content: (
        <div className="faq-content">
          <span>
            CTO as a Service is when a business hires a technical person or a
            technical team to benefit from their strategic technology
            leadership, guidance, and expertise.
          </span>
          <span>Following are benefits of hiring a CTO:</span>
          <ul>
            {ctoBenefits.map((list, ind) => (
              <li key={ind}>{list}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title:
        "How can a CTO as a Service help startups and small businesses scale effectively?",
      content: (
        <div className="faq-content">
          <span>
            CTO as a Service is when a business hires a technical person or a
            technical team to benefit from their strategic technology
            leadership, guidance, and expertise.
          </span>
          <span>Following are benefits of hiring a CTO:</span>
          <ul>
            {ctoBenefits.map((list, ind) => (
              <li key={ind}>{list}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "What is CTO as a Service, and how can it benefit my business?",
      content: (
        <div className="faq-content">
          <span>
            CTO as a Service is when a business hires a technical person or a
            technical team to benefit from their strategic technology
            leadership, guidance, and expertise.
          </span>
          <span>Following are benefits of hiring a CTO:</span>
          <ul>
            {ctoBenefits.map((list, ind) => (
              <li key={ind}>{list}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      title: "What is CTO as a Service, and how can it benefit my business?",
      content: (
        <div className="faq-content">
          <span>
            CTO as a Service is when a business hires a technical person or a
            technical team to benefit from their strategic technology
            leadership, guidance, and expertise.
          </span>
          <span>Following are benefits of hiring a CTO:</span>
          <ul>
            {ctoBenefits.map((list, ind) => (
              <li key={ind}>{list}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 5,
      title:
        "How can a CTO as a Service help startups and small businesses scale effectively?",
      content: (
        <div className="faq-content">
          <span>
            CTO as a Service is when a business hires a technical person or a
            technical team to benefit from their strategic technology
            leadership, guidance, and expertise.
          </span>
          <span>Following are benefits of hiring a CTO:</span>
          <ul>
            {ctoBenefits.map((list, ind) => (
              <li key={ind}>{list}</li>
            ))}
          </ul>
        </div>
      ),
    },

    {
      id: 6,
      title: "What is CTO as a Service, and how can it benefit my business?",
      content: (
        <div className="faq-content">
          <span>
            CTO as a Service is when a business hires a technical person or a
            technical team to benefit from their strategic technology
            leadership, guidance, and expertise.
          </span>
          <span>Following are benefits of hiring a CTO:</span>
          <ul>
            {ctoBenefits.map((list, ind) => (
              <li key={ind}>{list}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 7,
      title:
        "How can a CTO as a Service help startups and small businesses scale effectively?",
      content: (
        <div className="faq-content">
          <span>
            CTO as a Service is when a business hires a technical person or a
            technical team to benefit from their strategic technology
            leadership, guidance, and expertise.
          </span>
          <span>Following are benefits of hiring a CTO:</span>
          <ul>
            {ctoBenefits.map((list, ind) => (
              <li key={ind}>{list}</li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  const handleOpen = (id) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(id)) {
        return prevOpenItems.filter((itemId) => itemId !== id);
      } else {
        return [...prevOpenItems, id];
      }
    });
  };

  return (
    <>
    <Container>
      <FaqWrapper>
        <h2 className="color-primary text-center">Frequently Asked Questions</h2>
        <div className="faq-section">
          {frequentquestion.map((faq, index) => {
            return (
              <Collapse
                faqSection
                title={faq.title}
                onClick={() => handleOpen(faq.id)}
                open={openItems.includes(faq.id)}
              >
                {faq.content}
              </Collapse>
            );
          })}
        </div>
      </FaqWrapper>
    </Container>
     <Divider/>
     </>
  );
};

export default Index;
