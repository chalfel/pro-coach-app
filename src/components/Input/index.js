import React from 'react'

import { Container, TextInput } from './styles'

const Input = ({
  handleOnChange,
  handleOnSubmit = () => {},
  value,
  type,
  placeholder,
  width,
  disabled,
  height,
  returnKeyType
}) => {
  return (
    <Container>
      <TextInput
        disabled={disabled}
        onChange={handleOnChange}
        onSubmitEditing={({ nativeEvent }) => handleOnSubmit(nativeEvent.text)}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={value}
        width={width}
        height={height}
        secureTextEntry={type === 'password'}
        returnKeyType={returnKeyType}
      />
    </Container>
  )
}

export default Input
