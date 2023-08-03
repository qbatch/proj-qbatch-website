import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";

import { ThemeProvider } from "styled-components";
import Theme from '../../theme/theme-variable'
import GlobalStyle from "../../theme/global-style";

import Header from '../PagesComponent/Header'
import Footer from '../PagesComponent/Footer'

const Layout = ({children }) => {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Header />
         <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;600;700&display=swap" rel="stylesheet" />
        </Helmet>
        <GlobalStyle />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Layout;
