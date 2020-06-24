import React from 'react';

import { Container, Image } from './styles';

const ProfileImage = ({ size, imgSrc, children }) =>  {

  return (
    <Container size={size}>
      <Image size={size} source={imgSrc}/>
      { children }
    </Container>

  )

}

export default ProfileImage;
