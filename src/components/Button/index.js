import React from 'react'

import { Touchable, Text } from './styles.js'

const Button = ({ primary, handleOnPress, children, disabled } = {}) => {
  return (
    <Touchable disabled={disabled} primary={primary} onPress={handleOnPress}>
      <Text primary={primary}>{children}</Text>
    </Touchable>
  )
}

export default Button
