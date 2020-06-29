import React from 'react'

import { Feather as Icon } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider } from './src/contexts'
import { Home, Account, Checkout } from './src/screens'

const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size, focused }) => {
              const activeColor = '#000'
              const inactiveColor = '#bbb'

              if (route.name === 'Home') {
                return focused ? (
                  <Icon name="home" size={size} color={activeColor} />
                ) : (
                  <Icon name="home" size={size} color={inactiveColor} />
                )
              } else if (route.name === 'Account') {
                return focused ? (
                  <Icon name="user" size={size} color={activeColor} />
                ) : (
                  <Icon name="user" size={size} color={inactiveColor} />
                )
              } else if (route.name === 'Checkout') {
                return focused ? (
                  <Icon name="coffee" size={size} color={activeColor} />
                ) : (
                  <Icon name="coffee" size={size} color={inactiveColor} />
                )
              }
            }
          })}
          tabBarOptions={{
            style: {
              backgroundColor: '#fff',
              borderTopColor: '#eee'
            },
            activeTintColor: '#fff',
            inactiveTintColor: '#ccc',
            showLabel: false
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Account" component={Account} />
          <Tab.Screen name="Checkout" component={Checkout} />
        </Tab.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App
