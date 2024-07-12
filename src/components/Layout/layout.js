import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";

import { ThemeProvider } from "styled-components";
import Theme from '../../theme/theme-variable'
import GlobalStyle from "../../theme/global-style";

import Loading from '../../components/PagesComponent/Loading';

const Header = lazy(() => import('../PagesComponent/Header2'));
const Footer = lazy(() => import('../PagesComponent/Footer'));

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={Theme}>
       <Helmet>
        <link rel="icon" href="/fav-icon.png" type="image/png" />
        <link rel="shortcut icon" href="/fav-icon.png" type="image/png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav-icon16.png" />
        <link rel="icon" href="/fav-icon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/fav-icon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav-icon.png" />
        <html lang='en-US' />
      </Helmet>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        <Header />
        {children}
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default Layout;
