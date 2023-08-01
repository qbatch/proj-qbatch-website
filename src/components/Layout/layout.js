import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <GlobalStyle />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout;
