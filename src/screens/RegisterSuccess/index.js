import React from 'react'

import { Logo, Button, FormTitle, FormSubtitle } from '../../components'
import { SafeAreaView, LogoContainer } from './styles'

const RegisterSuccess = ({ navigation }) => {
  const nickname = 'Josezin'

  return (
    <SafeAreaView>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <FormTitle>Bem-vindo ao time, {nickname} </FormTitle>
      <FormSubtitle>Seu cadastro foi realizado com sucesso!</FormSubtitle>
      <Button primary handleOnPress={() => navigation.navigate('Entrar')}>
        Entrar
      </Button>
    </SafeAreaView>
  )
}
export default RegisterSuccess
