import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import { useLocation } from "react-router-dom";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: url(${({ img }) => img}) no-repeat center;
  background-size: cover;

  ${(props) =>
    ({
      user: css`
        min-height: 100vh;
      `,
    }[props.variant])}
`;

//change layout via for different pathname
const Layout = ({ children }) => {
  let location = useLocation();
  const wholeUrl = location.pathname;
  const split =wholeUrl.split('/');
  const url ='/'+split[1];
  const specialCases = {
    '/': 'HomepageStyle',
    '/join': 'LoginStyle',
    '/login': 'LoginStyle',
    '/property': 'PropertyStyle',
  };

  const specialCase = specialCases[url];
  if (specialCase === 'HomepageStyle') {
    return (
      <>
        <Header />
        <Main >{children}</Main>
        <Footer />
      </>
    );
  }
  if (specialCase === 'LoginStyle') {
    return (
      <>
        <Main >{children}</Main>
      </>
    );
  }
  if (specialCase === 'PropertyStyle') {
    return (
      <>
        <Main>
          {children}
        </Main>
        <Footer />
      </>
    );
  }
  return (
    <>
        {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};


export default (Layout);