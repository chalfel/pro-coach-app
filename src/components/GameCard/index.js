import React from 'react'

import { Container, Image, Text } from './styles'

const GameCard = ({ imgUrl, gameName, handleOnClick }) => {
  return (
    <Container onClick={handleOnClick}>
      <Image source={imgUrl} />
      <Text>{gameName}</Text>
    </Container>
  )
}

export default GameCard
