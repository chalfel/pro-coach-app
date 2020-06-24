import React from 'react'

import { Feather as Icon } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'

import { Header, SearchBar, Card, Button } from '../../components'
import { defaultNavHeader, noNavHeader } from '../../configs/components'
import { Container, Title } from './styles'

import { Account } from '..'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavHeader}>
      <Stack.Screen name="Home" component={Home} options={noNavHeader} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  )
}

const Home = ({ navigation }) => {
  return (
    <Container>
      <Button primary handleOnPress={() => navigation.navigate('Account')}>
        Click me for testing nav
      </Button>
      <Header />
      <SearchBar />
      <Title>
        Top coaches
        <Icon name="chevron-right" size={18} />
      </Title>
      <Card
        coachName="Super coach"
        gameTitle="FIFÃO"
        serviceTitle="Esse é meu serviço"
        serviceDetails="Você vai curtir pra carai esse serviço!!!!!"
        score="4.3"
      />
      <Title>
        Últimos lançamentos
        <Icon name="chevron-right" size={18} />
      </Title>
      <Card
        coachName="Super coach"
        gameTitle="FIFÃO"
        serviceTitle="Esse é meu serviço"
        serviceDetails="Você vai curtir pra carai esse serviço!!!!!"
        score="4.3"
      />
    </Container>
  )
}

export default HomeStack
