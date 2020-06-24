import React from 'react'

import { Touchable, Text } from './styles.js'

const Button = ({ primary, handleOnPress, children } = {}) => {
  return (
    <Touchable primary={primary} onPress={handleOnPress}>
      <Text primary={primary}>{children}</Text>
    </Touchable>
  )
}

export default Button
