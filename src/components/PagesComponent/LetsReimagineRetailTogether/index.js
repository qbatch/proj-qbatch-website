import React from 'react'
import { navigate } from 'gatsby';
import Button from '../../UiComponent/Button';
import Container from '../../UiComponent/Container';
import { LetsReimagineRetailTogetherWrapper } from './style';

const LetsReimagineRetailTogether = () => {
  return (
    <LetsReimagineRetailTogetherWrapper>
      <Container>
      <h2>Ready to stop just surviving and start thriving? Let's reimagine retail, together.</h2>
      <Button onClick={() => navigate('/contact')} text="Let’s Get Started" />
      </Container>
    </LetsReimagineRetailTogetherWrapper>
  )
}

export default LetsReimagineRetailTogether;
