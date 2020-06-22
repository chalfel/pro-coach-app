import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Container, Score, Icon } from './styles';

const Rating = ({ score }) => {
  return (
    <Container>
      <Score>{score}</Score>
      <Icon name="star" size={16} color="#9c0000" />
    </Container>
  );
}

export default Rating;