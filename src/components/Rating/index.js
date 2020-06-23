import { Feather as Icon } from '@expo/vector-icons';
import { Container, Score } from './styles';
import React from 'react';

const Rating = ({ score }) => {
  return (
    <Container>
      <Score>{score}</Score>
      <Icon name="star" size={16} color="#9c0000" />
    </Container>
  );
}

export default Rating;