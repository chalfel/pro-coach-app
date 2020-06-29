import React from 'react'

import { Logo, Button, FormTitle, FormSubtitle } from '../../components'
import { SafeAreaView, LogoContainer } from './styles'

const RegisterSuccess = ({ navigation, route }) => {
  const username = route.params.username

  return (
    <SafeAreaView>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <FormTitle>Bem-vindo ao time, {username} </FormTitle>
      <FormSubtitle>Seu cadastro foi realizado com sucesso!</FormSubtitle>
      <Button primary handleOnPress={() => navigation.navigate('Login')}>
        Entrar
      </Button>
    </SafeAreaView>
  )
}
export default RegisterSuccess
