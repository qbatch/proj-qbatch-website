import React from 'react';
import WhatToExpectWrapper from './style';
import Container from '../../../UiComponent/Container';

const WhatToExpect = ({ paragraph, innerContentData }) => {

  return (
    <WhatToExpectWrapper style={{ backgroundImage: "url(/what-to-expect-bg.svg)" }}>
      <Container>
        <h2 className='heading'>What to expect?</h2>
        <p className='paragraph'>{paragraph}</p>
        <div className='inner-content'>
          {innerContentData && innerContentData.map((data, index) => (
            <div className='inner-content-circle' key={index}>
              <h3>
                <span className='circle-content-heading'>{data.number}</span>
                <span>{data.title}</span>
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </WhatToExpectWrapper>
  );
};

export default WhatToExpect;
