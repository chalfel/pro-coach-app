import React, { useContext } from 'react'

import { Feather as Icon } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'

import { defaultNavHeader, noNavHeader } from '../configs/components'
import { AuthContext } from '../contexts'
import {
  Login,
  MyAccount,
  Register,
  RegisterSuccess,
  CoachRegister,
  Info,
  Welcome
} from '../screens'

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
            name="Welcome"
            component={Welcome}
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

export default AccountStack
