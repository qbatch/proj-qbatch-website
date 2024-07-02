import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;600;700&display=swap"
      as="style"
    />,
    <link
      href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    />,
  ])
}
