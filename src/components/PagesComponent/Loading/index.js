import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Index = () => {
  return (
    <LoadingWrapper>
      <img src='/loader-img.gif' alt='loading' width={140} height={140} />
    </LoadingWrapper>
  )
}

export default Index;
