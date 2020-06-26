import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'

import { Container, Image, Text } from './styles'

const GameCard = ({ imgUrl, gameName, handleOnClick }) => {
  return (
    <Container onClick={handleOnClick}>
      <Image source={imgUrl} />
      <LinearGradient
        colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)']}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: 12,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end'
        }}
      >
        <Text>{gameName}</Text>
      </LinearGradient>
    </Container>
  )
}

export default GameCard
