import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { defaultNavHeader, noNavHeader } from '../configs/components'
import {
  Home,
  ServiceSearchResults,
  CoachService,
  CoachPlanCreationA,
  CoachPlanCreationB,
  CoachPlanCreationSuccess,
  Checkout,
  CheckoutSuccess,
  Login
} from '../screens'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavHeader}>
      <Stack.Screen name="Home" component={Home} options={noNavHeader} />
      <Stack.Screen
        name="ServiceSearchResults"
        component={ServiceSearchResults}
        options={{ title: 'Pesquisa' }}
      />
      <Stack.Screen
        name="CoachPlanCreationA"
        component={CoachPlanCreationA}
        options={{ title: 'Novo plano' }}
      />
      <Stack.Screen
        name="CoachPlanCreationB"
        component={CoachPlanCreationB}
        options={{ title: 'Novo plano' }}
      />
      <Stack.Screen
        name="CoachPlanCreationSuccess"
        component={CoachPlanCreationSuccess}
        options={{ title: 'Novo plano' }}
      />
      <Stack.Screen
        name="CoachService"
        component={CoachService}
        options={{ title: 'Coach' }}
      />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Entrar' }}
      />
      <Stack.Screen
        name="CheckoutSuccess"
        component={CheckoutSuccess}
        options={{ title: 'Checkout' }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
