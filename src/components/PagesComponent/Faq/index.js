import React, { useState } from "react";

import Container from "../../UiComponent/Container";
import Collapse from "../../UiComponent/Collapse";
import Divider from '../../UiComponent/Divider';

import FaqWrapper from "./style";

const Index = (props) => {
  const { faqQuestion } = props
  const [openItems, setOpenItems] = useState([])

  const handleOpen = (id) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(id)) {
        return prevOpenItems.filter((itemId) => itemId !== id)
      } else {
        return [...prevOpenItems, id]
      }
    })
  }

  return (
    <>
      <Container>
        <FaqWrapper>
          <h2 className="color-primary text-center">Frequently Asked Questions</h2>
          <div className="faq-section">
            {faqQuestion.map((faq, index) => {
              return (
                <Collapse
                  key={index}
                  faqSection
                  title={faq.title}
                  onClick={() => handleOpen(faq.id)}
                  open={openItems.includes(faq.id)}
                >
                  {faq.content}
                </Collapse>
              )
            })}
          </div>
        </FaqWrapper>
      </Container>
      <Divider />
    </>
  )
}

export default Index;
