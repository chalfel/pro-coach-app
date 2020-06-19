import React from 'react';
import styled from 'styled-components/native';
import { Feather as Icon } from '@expo/vector-icons';

const Container = styled.View`
  flex-direction: row;
`;

const Score = styled.Text`
  color: #9c0000;
`;

const StarImage = styled.Image`
  width: 10px;
  height: 10px;
`;

const Rating = ({ score }) => {
  return (
    <Container>
      <Score>{score}</Score>
      <Icon name="star" size={16} color="#9c0000" />
    </Container>
  );
}

export default Rating;