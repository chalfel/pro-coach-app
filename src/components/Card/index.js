import React from 'react';
import { Rating } from '../../components';
import {
  CardBackgound,
  ProfilePicture,
  CoachName,
  GameTitle,
  ServiceTitle,
  ServiceDetails,
  TitleContainer,
  Title
} from './styles';

const Card = ({
  profilePic,
  gameTitle,
  coachName,
  score,
  serviceTitle,
  serviceDetails,
  onPress
}) => {
  const image = profilePic || { uri: 'https://picsum.photos/200' };

  return (
    <CardBackgound onPress={onPress}>
      <TitleContainer>
        <ProfilePicture source={image} />
        <Title>
          <CoachName>{coachName}</CoachName>
          <GameTitle>{gameTitle}</GameTitle>
          <Rating score={score} />
        </Title>
      </TitleContainer>
      <ServiceTitle>{serviceTitle}</ServiceTitle>
      <ServiceDetails>{serviceDetails}</ServiceDetails>
    </CardBackgound>
  );
}

export default Card;