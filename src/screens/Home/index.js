import React, { useEffect, useState } from 'react'
import { View, AsyncStorage } from 'react-native'

import { Feather as Icon } from '@expo/vector-icons'
import axios from 'axios'

import { Header, Input, Card } from '../../components'
import { api, coachServicesEndpoint } from '../../configs/connection'
import { Container, Title, ScrollView } from './styles'

const Home = ({ navigation }) => {
  const [topServices, setTopServices] = useState([])
  const [recentServices, setRecentServices] = useState([])
  const [inputValue, setInputValue] = useState('')

  const placeholder = 'Encontre jogos e coaches'
  const searchIcon = <Icon name="search" size={24} color="#aaa" />
  const autoCorrectSearch = false
  const returnKeyType = 'search'

  const getToken = () => {
    AsyncStorage.getItem('token').then((token) => {})
  }

  useEffect(() => {
    getToken()
    const topServicesParams = {
      params: {}
    }
    const recentServicesParams = {
      params: {}
    }
    const topServicesReq = api.get(
      `/${coachServicesEndpoint}`,
      topServicesParams
    )
    const recentServicesReq = api.get(
      `/${coachServicesEndpoint}`,
      recentServicesParams
    )

    axios
      .all([topServicesReq, recentServicesReq])
      .then(
        axios.spread((topServicesRes, recentServicesRes) => {
          console.log(topServicesRes.data)
          setTopServices(topServicesRes.data)
          setRecentServices(recentServicesRes.data)
        })
      )
      .catch((e) => console.log(e))
    return () => {}
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
              autoCorrectSearch,
              returnKeyType
            })
          }
        }}
        returnKeyType={returnKeyType}
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
                coachName={user.username}
                gameTitle={game.name}
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
                coachName={user.username}
                gameTitle={game.name}
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

export default Home
