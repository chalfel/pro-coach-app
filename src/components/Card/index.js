import React from 'react'

import { Rating } from '..'

import {
  CardBackgound,
  CoachName,
  GameTitle,
  ProfilePicture,
  ServiceDetails,
  ServiceTitle,
  Title,
  TitleContainer,
} from './styles'

const Card = ({
  profilePic,
  gameTitle,
  coachName,
  score,
  serviceTitle,
  serviceDetails,
  handleOnPress,
}) => {
  const image = profilePic || { uri: 'https://picsum.photos/200' }

  return (
    <CardBackgound onPress={handleOnPress}>
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
  )
}

export default Card
