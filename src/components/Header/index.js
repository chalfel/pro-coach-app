import React from 'react';
import { Container, Logo } from './styles';
import logo from '../../../assets/inline-logo.png';

const Header = () => {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}

export default Header;