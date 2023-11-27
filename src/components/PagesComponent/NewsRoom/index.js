import React from 'react';

import NewsRoomWrapper from './style';

const index = () => {
  return (
    <NewsRoomWrapper>
      <h2>News Room</h2>
      <div className='news-banner'>
        <div className='full-flex'>
          <div className="blog-badge">Blog</div>
        </div>
        <h3>News Post Title will come here</h3>
      </div>
    </NewsRoomWrapper>
  )
}

export default index;