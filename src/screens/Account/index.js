import React from 'react'

import { Feather as Icon } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'

import { Header, Button } from '../../components'
import { defaultNavHeader, noNavHeader } from '../../configs/components'
import { SafeAreaView, Input } from './styles'

import { CoachRegister, Info } from '..'

const CoachRegisterSucess = () => {
  return (
    <Info
      icon={<Icon name="check-circle" size={38} color="#00ca14" />}
      title="Finalizado"
      description="Vamos entrar com contato em breve, fique de olho no seu e-mail!"
    />
  )
}

const Stack = createStackNavigator()

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavHeader}>
      <Stack.Screen name="Account" component={Account} options={noNavHeader} />
      <Stack.Screen
        name="CoachRegister"
        component={CoachRegister}
        options={{ title: 'Cadastrar' }}
      />
      <Stack.Screen
        name="CoachRegisterSuccess"
        component={CoachRegisterSucess}
        options={{ title: 'Cadastrar' }}
      />
    </Stack.Navigator>
  )
}

const Account = () => {
  return (
    <SafeAreaView>
      <Header />
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Button text="Entrar" buttonColor="#9c0000" textColor="#fff" />
      <Button text="Cadastrar" buttonColor="#fff" textColor="#000" />
    </SafeAreaView>
  )
}

export default AccountStack
