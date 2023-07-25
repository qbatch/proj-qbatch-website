import * as React from 'react'

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../theme/global-style";
import Theme from '../../theme/theme-variable'

import Header from '../PagesComponent/Header'
import Footer from '../PagesComponent/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({children }) => {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Header />
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout;
