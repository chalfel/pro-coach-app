import React from 'react';
import styled from 'styled-components/native';
import { Rating } from '.'

const Container = styled.View``;

const GameTitle = styled.Text``;

const CoachTitle = styled.Text``;

const Achievements = styled.TextInput``;

const ProfilePicture = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 35px;
`;

const Card = () => {
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