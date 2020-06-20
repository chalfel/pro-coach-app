import React from 'react';
import { Rating } from '..';
import {
  CardBackgound,
  ProfilePicture,
  CoachName,
  GameTitle,
  ServiceTitle,
  ServiceDetails,
  TitleWithImage,
  Title
} from './styles';

const Card = ({
  profilePic,
  gameTitle,
  coachName,
  score,
  serviceTitle,
  serviceDetails
}) => {
  return (
    <CardBackgound>
      <TitleWithImage>
        <ProfilePicture source={{ uri: 'https://picsum.photos/200' }} />
        <Title>
          <CoachName>{coachName}</CoachName>
          <GameTitle>{gameTitle}</GameTitle>
          <Rating score={score} />
        </Title>
      </TitleWithImage>
      <ServiceTitle>{serviceTitle}</ServiceTitle>
      <ServiceDetails>{serviceDetails}</ServiceDetails>
    </CardBackgound>
  );
}

export default Card;