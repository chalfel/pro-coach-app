import React, { useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'

import { FormTitle, GameCard } from '../../components'
import { api, gamesEndpoint } from '../../configs/connection'
import { Container } from './styles'

const CoachPlanCreationA = ({ navigation }) => {
  const [availableGames, setAvailableGames] = useState([
    { _id: 0, name: 'FIFA20' }
  ])

  useEffect(() => {
    api
      .get(`/${gamesEndpoint}`)
      .then(({ data }) => setAvailableGames(data))
      .catch((e) => console.log(e))
  }, [])

  return (
    <Container>
      <FormTitle>Selecione o jogo</FormTitle>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {availableGames.map(({ _id, name, pictureUrl }) => (
            <GameCard
              key={_id}
              imgUrl={pictureUrl}
              gameName={name}
              handleOnClick={() =>
                navigation.navigate('CoachPlanCreationB', {
                  game: {
                    name: name,
                    _id: _id
                  }
                })
              }
            />
          ))}
        </ScrollView>
      </View>
    </Container>
  )
}

export default CoachPlanCreationA
