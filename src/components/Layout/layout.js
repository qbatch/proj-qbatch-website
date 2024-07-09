import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";

import { ThemeProvider } from "styled-components";
import Theme from '../../theme/theme-variable'
import GlobalStyle from "../../theme/global-style";

import Header from '../PagesComponent/Header2'
import Footer from '../PagesComponent/Footer'

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={Theme}>
       <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/fav-icon.png" type="image/png" />
        <link rel="shortcut icon" href="/fav-icon.png" type="image/png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav-icon16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav-icon.png" />
        <link rel="icon" href="/fav-icon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/fav-icon.ico" type="image/x-icon" />
        <html lang='en-US' />
      </Helmet>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
