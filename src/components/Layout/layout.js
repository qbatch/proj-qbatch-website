import * as React from 'react'
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../theme/global-style";
import Theme from '../../theme/theme-variable'
import Header from '../Header/index'
import Footer from '../Footer/index'
import 'bootstrap/dist/css/bootstrap.min.css';

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

export default Layout