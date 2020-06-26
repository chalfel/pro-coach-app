import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import { Feather as Icon } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import axios from 'axios'

import { Header, Input, Card } from '../../components'
import { defaultNavHeader, noNavHeader } from '../../configs/components'
import { apiBaseUrl, coachServicesEndpoint } from '../../configs/connection'

import { ServiceSearchResults, CoachService } from '..'

import { Container, Title, ScrollView } from './styles'

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
      <Stack.Screen name="CoachService" component={CoachService} />
      {/* <Stack.Screen name="Checkout" component={Checkout} /> */}
      {/* <Stack.Screen name="CheckoutSuccess" component={CheckoutSuccess} /> */}
    </Stack.Navigator>
  )
}

const Home = ({ navigation }) => {
  const [topServices, setTopServices] = useState([{}])
  const [recentServices, setRecentServices] = useState([])
  const [inputValue, setInputValue] = useState('')
  const placeholder = 'Encontre jogos e coaches'
  const searchIcon = <Icon name="search" size={24} color="#aaa" />
  const autoCorrectSearch = false

  useEffect(() => {
    const topServicesParams = {
      params: {}
    }
    const recentServicesParams = {
      params: {}
    }
    const topServicesReq = axios.get(
      `${apiBaseUrl}/${coachServicesEndpoint}`,
      topServicesParams
    )
    const recentServicesReq = axios.get(
      `${apiBaseUrl}/${coachServicesEndpoint}`,
      recentServicesParams
    )

    axios
      .all([topServicesReq, recentServicesReq])
      .then(
        axios.spread((topServicesRes, recentServicesRes) => {
          setTopServices(topServicesRes)
          setRecentServices(recentServicesRes)
        })
      )
      .catch((e) => console.log(e))
  }, [])

  return (
    <Container>
      <Header />
      <Input
        placeholder={placeholder}
        icon={searchIcon}
        value={inputValue}
        autoCorrect={autoCorrectSearch}
        handleOnChange={(text) => setInputValue(text)}
        handleOnSubmit={(text) => {
          if (text.length > 0) {
            setInputValue('')
            navigation.navigate('ServiceSearchResults', {
              text,
              placeholder,
              searchIcon,
              autoCorrectSearch
            })
          }
        }}
        returnKeyType="search"
      />

      <Title>
        Top coaches
        <Icon name="chevron-right" size={18} />
      </Title>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {topServices.map((service) => {
            const { _id, user, game, name, description, rating } = service
            return (
              <Card
                key={_id}
                handleOnPress={() =>
                  navigation.navigate('CoachService', service)
                }
                coachName={user}
                gameTitle={game}
                serviceTitle={name}
                serviceDetails={description}
                score={rating}
              />
            )
          })}
        </ScrollView>
      </View>

      <Title>
        Últimos lançamentos
        <Icon name="chevron-right" size={18} />
      </Title>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recentServices.map((service) => {
            const { _id, user, game, name, description, rating } = service
            return (
              <Card
                key={_id}
                handleOnPress={() =>
                  navigation.navigate('CoachService', service)
                }
                coachName={user}
                gameTitle={game}
                serviceTitle={name}
                serviceDetails={description}
                score={rating}
              />
            )
          })}
        </ScrollView>
      </View>
    </Container>
  )
}

export default HomeStack
