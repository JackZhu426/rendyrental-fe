import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalStyle from './globalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router';
import NoPage from './pages/NoPage';
import PropertyDetails from './pages/PropertyDetails';
import JoinPage from './pages/JoinPage';
import Header from './app/Header';
import Footer from './app/Footer';
import SignUp from './pages/SignUp';
import Layout from './app/Layout';

const theme = {
  primaryColor: '#e4002b',
};

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<SignUp />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  </>
);

export default App;
