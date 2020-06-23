import React from 'react'

import { Container, TextInput } from './styles'

const Input = ({
  handleOnChange,
  value,
  type,
  placeholder,
  width,
  height,
  icon,
}) => {
  return (
    <Container>
      { icon }
      <TextInput
        onChange={handleOnChange}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={value}
        width={width}
        height={height}
        secureTextEntry={type === 'password'}
      />
    </Container>
  )
}

export default Input