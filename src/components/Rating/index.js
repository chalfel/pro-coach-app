import React from 'react'

import { Feather as Icon } from '@expo/vector-icons'

import { Container, Score } from './styles'

const Rating = ({ score }) => {
  return (
    <Container>
      <Score>{score && score.toFixed(2)}</Score>
      <Icon name="star" size={16} color="#F1C115" />
    </Container>
  )
}

export default Rating
