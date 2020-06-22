import React, { useState, useEffect } from 'react'

import { Feather as Icon } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'


import { Header, SearchBar, Card } from '../../components'

import { Account } from '..'

import { Container, Title } from './styles'


const HomeStack = () => {
  const Stack = createStackNavigator()
  const noHeader = {
    header: () => null,
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={noHeader} />
      {/* <Stack.Screen name="Account" component={CoachService} /> */}
    </Stack.Navigator>
  )
}

const Home = ({ navigation }) => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <Title>
        Top coaches
        <Icon name="chevron-right" size={18} />
      </Title>
      <Card
        onPress={() => navigation.navigate('Account')}
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
