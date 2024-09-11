import React from 'react'
import FaqSection from '../Faq';
import { FrequentlyAskedQuestionsHealthCareWrapper } from './style'
import { FrequentlyAskedQuestionsHealthCareFaq } from '../../../constants';

const FrequentlyAskedQuestionsHealthCare = () => {
  return (
    <FrequentlyAskedQuestionsHealthCareWrapper>
      <FaqSection className="health-care-faq" faqQuestion={FrequentlyAskedQuestionsHealthCareFaq} />
    </FrequentlyAskedQuestionsHealthCareWrapper>
  )
}

export default FrequentlyAskedQuestionsHealthCare
