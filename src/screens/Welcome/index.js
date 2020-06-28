import React from 'react'

import logo from '../../../assets/logo-with-name.png'
import { Button } from '../../components'
import { Slogan, Link, Container, LogoWithName } from './styles'

const Welcome = ({ navigation }) => {
  const handleRegisterButton = () => {
    navigation.navigate('Register')
  }

  const handleCoachButton = () => {
    navigation.navigate('CoachRegister')
  }

  const handleLoginLink = () => {
    navigation.navigate('Login')
  }

  return (
    <Container>
      <LogoWithName source={logo} resizeMethod="auto" />
      <Slogan>Esteja entre os melhores</Slogan>
      <Button primary handleOnPress={handleRegisterButton}>
        Cadastrar
      </Button>
      <Button handleOnPress={handleCoachButton}>Ser um coach</Button>
      <Link onPress={handleLoginLink}>Entrar</Link>
    </Container>
  )
}

export default Welcome
