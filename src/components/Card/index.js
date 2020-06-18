import React from 'react';
import { Rating } from '.';
import {
  Container,
  GameTitle,
  CoachTitle,
  Achievements
} from './styles';

const Card = ({ profilePic, game, coach, rating, achievements }) => {
  return (
    <Container>
      <ProfilePicture source={{ uri: 'https://picsum.photos/200' }} />
      <GameTitle>FIFA 20</GameTitle>
      <CoachTitle>CARD</CoachTitle>
      <Rating></Rating>
      <Achievements></Achievements>
    </Container>
  );
}

export default Card;