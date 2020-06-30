import React from 'react'

import { Feather as Icon } from '@expo/vector-icons'

import { ProfileImage } from '..'

import { Container, IconContainer } from './styles'

const ImageUpload = ({ imgSrc, handleOnUpload }) => {
  return (
    <Container>
      <ProfileImage imgSrc={{ uri: imgSrc }}>
        <IconContainer onClick={handleOnUpload} onPress={handleOnUpload}>
          <Icon name="camera" size={20} />
        </IconContainer>
      </ProfileImage>
    </Container>
  )
}

export default ImageUpload
