import React from 'react'

import { Container, Title, Description } from './styles'

const Info = ({ icon, title, description }) => {
  return (
    <Container>
      {icon}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default Info
