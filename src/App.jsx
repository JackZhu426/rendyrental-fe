import React from 'react';
// import Home from './pages/Home';
import Header from './app/Header';
import Footer from './app/Footer';
import Login from './pages/Login';
// import { createGlobalStyle } from 'styled-components';

import GlobalStyle from './globalStyle.jsx';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#e4002b',
};

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header />
      <Login />
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  </>
);

export default App;
