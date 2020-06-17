import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer, BaseRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icon from 'react-feather';
import { Header, NavBar } from './src/components';
import { Home } from './src/screens';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        screenOptions={
          ({ route, navigation }) => ({
            tabBarIcon: ({ color, size, focused }) => {
              if (route.name === 'Home') {
                return (
                  focused
                  ? <Icon.Home style={{ margin: '8px 0 0' }} />
                  : <Icon.Home style={{ margin: '8px 0 0', color: '#ccc' }} />
                );
              } else if (route.name === 'Account') {
                return (
                  focused
                  ? <Icon.User style={{ margin: '8px 0 0' }} />
                  : <Icon.User style={{ margin: '8px 0 0', color: '#ccc' }} />
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
        <Tab.Screen name="Account" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;