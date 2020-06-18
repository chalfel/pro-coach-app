import React from 'react';
import { Container, Text } from './styles.js';

const Button = (
  {
    text = '',
    textColor = '#fff',
    buttonColor = '#000',
    borderColor = 'transparent',
    shadow = false
  } = {}
) => {
  const containerCustomStyle = {
    backgroundColor: buttonColor,
    border: `1px solid ${borderColor}`
  };

  const textCustomStyle = {
    color: textColor
  };

  return (
    <Container style={containerCustomStyle}>
      <Text style={textCustomStyle}>{text}</Text>
    </Container>
  );
}

export default Button;