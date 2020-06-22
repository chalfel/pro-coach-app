import React from 'react';
import logo from '../../../assets/inline-logo.png';

import { Container, Logo } from './styles';

const Header = () => {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
};

export default Header;
