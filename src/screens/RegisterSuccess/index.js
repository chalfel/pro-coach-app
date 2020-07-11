import React from 'react'

import { Logo, Button } from '../../components'
import Info from '../Info'
import { SafeAreaView } from './styles'

const RegisterSuccess = ({ navigation, route }) => {
  const username = route.params.username

  return (
    <SafeAreaView>
      {/* <LogoContainer>
        <Logo />
      </LogoContainer>
      <FormTitle>Bem-vindo ao time, {username} </FormTitle>
      <FormSubtitle>Seu cadastro foi realizado com sucesso!</FormSubtitle> */}
      <Info
        icon={<Logo />}
        title={`Bem-vindo ao time, ${username}`}
        description="Seu cadastro foi realizado com sucesso!"
      />
      <Button primary handleOnPress={() => navigation.navigate('Login')}>
        Entrar
      </Button>
    </SafeAreaView>
  )
}
export default RegisterSuccess
