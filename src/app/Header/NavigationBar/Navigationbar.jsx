import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { ButtonStyle } from '../../../hoc/Button';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  padding-top: 2rem;
  padding-left: 9%;
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
  width: 55.5%;
`;

const ButtonwithoutBorder = styled(ButtonStyle)`
  color: #fff;
  border: none;
  height: 40px;
`;

const ButtonWhitFont = styled(ButtonStyle)`
  color: #fff;
  height: 40px;
  &:hover {
    background-color: #fff;
  }
`;

const NavigationBar = () => (
  <Container>
    <Logo className="Logo" />
    <Space />
    <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>
      <ButtonwithoutBorder className="SigninButton" size="90px">
        Sign in
      </ButtonwithoutBorder>
    </Link>
    <Link to="/join" style={{ color: 'white', textDecoration: 'none' }}>
      <ButtonWhitFont className="JoinButton" size="90px">
        &nbsp;&nbsp;Join&nbsp;&nbsp;
      </ButtonWhitFont>
    </Link>
  </Container>
);

export default NavigationBar;
