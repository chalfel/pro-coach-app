import React from 'react';
import { Touchable, Text } from './styles.js';

const Button = ({ text = '', buttonColor, textColor } = {}) => {
  return (
    <Touchable buttonColor={buttonColor}>
      <Text textColor={textColor}>{text}</Text>
    </Touchable>
  );
}

export default Button;