import React, { useState } from "react";

import Container from "../../UiComponent/Container";
import Collapse from "../../UiComponent/Collapse";
import Divider from '../../UiComponent/Divider';
import Button from "../../UiComponent/Button"
import FaqWrapper from "./style";

const Index = (props) => {
  const { faqQuestion, className } = props;
  const [openItems, setOpenItems] = useState([]);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const handleOpen = (id) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(id)) {
        return prevOpenItems.filter((itemId) => itemId !== id);
      } else {
        return [...prevOpenItems, id];
      }
    });
  };

  const toggleShowAllFaqs = () => {
    setShowAllFaqs(!showAllFaqs);
  };

  const visibleFaqs = showAllFaqs ? faqQuestion : faqQuestion.slice(0, 6);

  return (
    <>
      <Container>
        <FaqWrapper>
          <h2 className="color-primary text-center">Frequently Asked Questions</h2>
          <div className={`faq-section ${className}`}>
            {visibleFaqs.map((faq, index) => (
              <Collapse
                key={faq.id}
                faqSection
                title={faq.title}
                onClick={() => handleOpen(faq.id)}
                open={openItems.includes(faq.id)}
              >
                {faq.content}
              </Collapse>
            ))}
          </div>
          {faqQuestion.length > 6 && (
            <Button onClick={toggleShowAllFaqs} text={showAllFaqs ? "Show Less" : "Load More"} className="mx-auto load-more-btn" />
          )}
        </FaqWrapper>
      </Container>
      <Divider />
    </>
  );
};

export default Index;
