import React from 'react'

import { Rating } from '..'

import {
  Container,
  TouchableContainer,
  CoachName,
  GameTitle,
  ProfilePicture,
  ServiceDetails,
  ServiceTitle,
  Title,
  TitleContainer
} from './styles'

const Card = ({
  profilePic,
  gameTitle,
  coachName,
  score,
  serviceTitle,
  serviceDetails,
  handleOnPress
}) => {
  const image = profilePic || { uri: 'https://picsum.photos/200' }

  return (
    <TouchableContainer onPress={handleOnPress}>
      <Container>
        <TitleContainer>
          <ProfilePicture source={image} />
          <Title>
            <CoachName>{coachName}</CoachName>
            <GameTitle>{gameTitle}</GameTitle>
            <Rating score={score} />
          </Title>
          <ServiceTitle>{serviceTitle}</ServiceTitle>
          <ServiceDetails>{serviceDetails}</ServiceDetails>
        </TitleContainer>
      </Container>
    </TouchableContainer>
  )
}

export default Card
