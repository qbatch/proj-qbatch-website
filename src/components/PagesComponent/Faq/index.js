import React, { useState } from "react";
import Container from "../../UiComponent/Container";
import Collapse from "../../UiComponent/Collapse";
import FaqWrapper from "./style";
const Index = () => {
  const [openItems, setOpenItems] = useState([]);
  
  const frequentquestion = [
    {
      id: 1,
      title: "What is CTO as a Service, and how can it benefit my business?",
      content: "kkk",
    },
    {
      id: 2,
      title: "How can a CTO as a Service help startups and small businesses scale effectively?",
      content: "kkk",
    },
    {
      id: 3,
      title: "What is CTO as a Service, and how can it benefit my business?",
      content: "kkk",
    },
    {
      id: 4,
      title: "How can a CTO as a Service help startups and small businesses scale effectively?",
      content: "kkk",
    },
    {
      id: 5,
      title: "How can a CTO as a Service help startups and small businesses scale effectively?",
      content: "kkk",
    },
  ];
  const handleOpen=(id)=>{
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(id)) {
        return prevOpenItems.filter((itemId) => itemId !== id);
      } else {
        return [...prevOpenItems, id];
      }
    });
  }
  return (
    <Container>
      <FaqWrapper>
        <h2 className="color-primary text-center">FAQs</h2>
        <div className="faq-section">
          {frequentquestion.map((faq,index)=>{
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
  );
};

export default Index;
