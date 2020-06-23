import React from 'react'
import { Touchable, Text } from './styles.js'

const Button = ({
  text,
  primary,
  handleOnPress,
} = {}) => {
  return (
    <Touchable primary={primary} onPress={handleOnPress}>
      <Text primary={primary}>{text}</Text>
    </Touchable>
  )
}

export default Button