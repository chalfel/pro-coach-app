import React, { useEffect, useState } from 'react'
import { View, AsyncStorage } from 'react-native'

import { Feather as Icon } from '@expo/vector-icons'

import { Header, Input, Card } from '../../components'
import { getCoachService } from '../../services/coachService'
import { Container, Title, ScrollView } from './styles'

const Home = ({ navigation }) => {
  const [topServices, setTopServices] = useState([])
  const [recentServices, setRecentServices] = useState([])
  const [inputValue, setInputValue] = useState('')

  const placeholder = 'Encontre jogos e coaches'
  const iconName = 'search'
  const autoCorrectSearch = false
  const returnKeyType = 'search'

  const getToken = () => {
    AsyncStorage.getItem('token').then((token) => {})
  }

  useEffect(() => {
    getToken()
    const topServicesParams = {
      params: { sort: 'desc(rating)', limit: 10 }
    }
    const recentServicesParams = {
      params: { sort: 'desc(created_at)', limit: 10 }
    }
    getCoachService(topServicesParams).then(setTopServices)
    getCoachService(recentServicesParams).then(setRecentServices)
    return () => {}
  }, [])

  return (
    <Container>
      <Header />
      <Input
        placeholder={placeholder}
        iconName={iconName}
        value={inputValue}
        autoCorrect={autoCorrectSearch}
        handleOnChange={(text) => setInputValue(text)}
        handleOnSubmit={(text) => {
          if (text.length > 0) {
            setInputValue('')
            navigation.navigate('ServiceSearchResults', {
              text,
              placeholder,
              iconName,
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
                  navigation.navigate('CoachService', { service })
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
