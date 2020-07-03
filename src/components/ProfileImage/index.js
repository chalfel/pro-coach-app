import React from 'react'

import img from '../../../assets/gray.jpg'
import { Container, Image } from './styles'

const ProfileImage = ({ size, imgSrc, children }) => {
  return (
    <Container size={size}>
      <Image size={size} source={imgSrc || img} />
      {children}
    </Container>
  )
}

export default ProfileImage
