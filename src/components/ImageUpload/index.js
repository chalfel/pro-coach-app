import React from 'react'

import { Feather as Icon } from '@expo/vector-icons'

import { ProfileImage } from '..'

import { Container, IconContainer } from './styles'

const ImageUpload = ({ imgSrc, handleOnUpload }) => {
  return (
    <Container onClick={handleOnUpload}>
      <ProfileImage imgSrc={imgSrc}>
        <IconContainer>
          <Icon name="camera" size={20} />
        </IconContainer>
      </ProfileImage>
    </Container>
  )
}

export default ImageUpload
