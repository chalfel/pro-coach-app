import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon } from '@expo/vector-icons';
import { Home, Account } from './src/screens';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ color, size, focused }) => {
              const activeColor = '#000';
              const inactiveColor = '#bbb';

              if (route.name === 'Home') {
                return (
                  focused
                  ? <Icon name="home" size={size} color={activeColor} />
                  : <Icon name="home" size={size} color={inactiveColor} />
                );
              } else if (route.name === 'Account') {
                return (
                  focused
                  ? <Icon name="user" size={size} color={activeColor} />
                  : <Icon name="user" size={size} color={inactiveColor} />
                );
              }
            }
          })
        }
        tabBarOptions={
          {
            style: {
              backgroundColor: '#fff',
              borderTopColor: '#eee'
            },
            activeTintColor: '#fff',
            inactiveTintColor: '#ccc',
            showLabel: false
          }
        }>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;