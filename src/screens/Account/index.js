import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Header, Button } from '../../components'
import { defaultNavHeader, noNavHeader } from '../../configs/components'
import { SafeAreaView, Container } from './styles'

import { Login, MyAccount, Register, RegisterSuccess } from '..'

const Stack = createStackNavigator()

const AccountStack = () => {
  const user = { nickname: 'josezin' }
  return (
    <Stack.Navigator screenOptions={defaultNavHeader}>
      <Stack.Screen name="Account" component={Account} options={noNavHeader} />
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
      <Header />
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
