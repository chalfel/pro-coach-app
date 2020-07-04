import React from 'react'

import { Feather as Icon } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider } from './src/contexts'
import { HomeStack, AccountStack } from './src/routes'

const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ size, focused }) => {
              const activeColor = '#000'
              const inactiveColor = '#bbb'

              if (route.name === 'Home') {
                return (
                  <Icon
                    name="home"
                    size={size}
                    color={focused ? activeColor : inactiveColor}
                  />
                )
              } else if (route.name === 'Account') {
                return (
                  <Icon
                    name="user"
                    size={size}
                    color={focused ? activeColor : inactiveColor}
                  />
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
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Account" component={AccountStack} />
        </Tab.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App
