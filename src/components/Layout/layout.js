import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";

import { ThemeProvider } from "styled-components";
import Theme from '../../theme/theme-variable'
import GlobalStyle from "../../theme/global-style";

import Header from '../PagesComponent/Header2'
import Footer from '../PagesComponent/Footer'

const Layout = ({children }) => {

  return (
      <ThemeProvider theme={Theme}>
        <Header/>
         <Helmet>
            <html lang='en-US' />
        </Helmet>
        <GlobalStyle />
        {children}
        <Footer />
      </ThemeProvider>
  );
}

export default Layout;
