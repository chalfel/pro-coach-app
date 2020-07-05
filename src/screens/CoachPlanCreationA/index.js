import React, { useContext, useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'

import img from '../../../assets/gray.jpg'
import { FormTitle, GameCard } from '../../components'
import { AuthContext } from '../../contexts'
import { getGames } from '../../services/game'
import { Container } from './styles'

const CoachPlanCreationA = ({ navigation }) => {
  const [availableGames, setAvailableGames] = useState([])
  const { token } = useContext(AuthContext)
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const games = await getGames(token)
        setAvailableGames(games)
      } catch (e) {
        console.log(e)
      }
    }
    fetchGames()
  }, [])

  return (
    <Container>
      <FormTitle>Selecione o jogo</FormTitle>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {availableGames.map(({ _id, gameTitle, imgUrl }) => (
            <GameCard
              key={_id}
              imgUrl={imgUrl || img}
              gameTitle={gameTitle}
              handleOnClick={() =>
                navigation.navigate('CoachPlanCreationB', {
                  game: {
                    name: gameTitle,
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
