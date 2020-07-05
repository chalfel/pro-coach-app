import React from 'react'
import { Platform } from 'react-native'

import logo from '../../../assets/inline-logo.png'
import { Container, Logo } from './styles'

const Header = () => {
  return (
    <Container platform={Platform}>
      <Logo source={logo} />
    </Container>
  )
}

export default Header
