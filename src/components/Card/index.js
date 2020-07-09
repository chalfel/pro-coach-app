import React from 'react'

import Rating from '../Rating'
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
        </TitleContainer>
        <ServiceTitle>{serviceTitle}</ServiceTitle>
        <ServiceDetails>{serviceDetails}</ServiceDetails>
      </Container>
    </TouchableContainer>
  )
}

export default Card
