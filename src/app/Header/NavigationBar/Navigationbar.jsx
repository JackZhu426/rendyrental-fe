import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { Button } from '../../../hoc/Button';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  padding-top: 2rem;
  padding-left: 10%;
  padding-right: 10%;
  color: #fff;
  word-wrap: break-word;
  height: 60px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  height: 100px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    padding-left: 5%;
    padding-bottom: 0;
    Button {
      margin-left: 3px;
      size: 20%;
    }
    border-bottom: 0.1rem solid red;
  }
`;

const Space = styled.div`
  width: 55%;
`;

const buttonstyle = {
  root: {
    color: 'white',
    width: '100px',
    height: '40px',
  },
};

const NavigationBar = () => (
  <Container>
    <Logo className="Logo" />
    <Space />
    <div style={buttonstyle.root}>
      <Link to="/login">
        <Button className="SigninButton">Sign in</Button>
      </Link>
    </div>
    <div style={buttonstyle.root}>
      <Link to="/join">
        <Button className="JoinButton">&nbsp;&nbsp;Join&nbsp;&nbsp;</Button>
      </Link>
    </div>
  </Container>
);

export default NavigationBar;
