import React from 'react'

import { Feather as Icon } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'

import { Button } from '../../components'
import { defaultNavHeader, noNavHeader } from '../../configs/components'
import { SafeAreaView, Container } from './styles'

import {
  Login,
  MyAccount,
  Register,
  RegisterSuccess,
  CoachRegister,
  Info,
  Welcome
} from '..'

const Stack = createStackNavigator()

const CoachRegisterSucess = () => {
  return (
    <Info
      icon={<Icon name="check-circle" size={38} color="#00ca14" />}
      title="Finalizado"
      description="Vamos entrar com contato em breve, fique de olho no seu e-mail!"
    />
  )
}
const AccountStack = () => {
  const user = { nickname: 'josezin' }

  return (
    <Stack.Navigator screenOptions={defaultNavHeader}>
      <Stack.Screen name="Account" component={Account} options={noNavHeader} />
      <Stack.Screen name="Welcome" component={Welcome} options={noNavHeader} />
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
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Entrar' }}
      />
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{ title: user.nickname }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Cadastrar' }}
      />
      <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSuccess}
        options={{ title: 'Cadastrar' }}
      />
    </Stack.Navigator>
  )
}

const Account = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Container>
        <Button handleOnPress={() => navigation.navigate('Register')} primary>
          Cadastrar
        </Button>
        <Button>Quero ser coach</Button>
        <Button handleOnPress={() => navigation.navigate('Login')}>
          Entrar
        </Button>
        <Button handleOnPress={() => navigation.navigate('MyAccount')}>
          Minha Conta
        </Button>
      </Container>
    </SafeAreaView>
  )
}

export default AccountStack
