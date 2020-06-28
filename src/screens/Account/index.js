import React, { useContext } from 'react'

import { Feather as Icon } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthContext } from '../../contexts'
import { Header, Button } from '../../components'
import { defaultNavHeader, noNavHeader } from '../../configs/components'
import { SafeAreaView, Container } from './styles'

import {
  Login,
  Register,
  RegisterSuccess,
  CoachRegister,
  Info,
  MyAccount
} from '..'

const Stack = createStackNavigator()

const CoachRegisterSuccess = () => {
  return (
    <Info
      icon={<Icon name="check-circle" size={38} color="#00ca14" />}
      title="Finalizado"
      description="Vamos entrar com contato em breve, fique de olho no seu e-mail!"
    />
  )
}
const AccountStack = () => {
  const { signed, user } = useContext(AuthContext)
  return (
    <Stack.Navigator screenOptions={defaultNavHeader}>
      {signed ? (
        <Stack.Screen
          name="Account"
          component={MyAccount}
          options={{ title: user.username }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Account"
            component={Account}
            options={noNavHeader}
          />
          <Stack.Screen
            name="CoachRegister"
            component={CoachRegister}
            options={{ title: 'Cadastrar' }}
          />
          <Stack.Screen
            name="CoachRegisterSuccess"
            component={CoachRegisterSuccess}
            options={{ title: 'Cadastrar' }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Entrar' }}
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
        </>
      )}
    </Stack.Navigator>
  )
}

const Account = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header></Header>
      <Container>
        <Button handleOnPress={() => navigation.navigate('Register')} primary>
          Cadastrar
        </Button>
        <Button handleOnPress={() => navigation.navigate('CoachRegister')}>
          Quero ser coach
        </Button>
        <Button handleOnPress={() => navigation.navigate('Login')}>
          Entrar
        </Button>
      </Container>
    </SafeAreaView>
  )
}

export default AccountStack
