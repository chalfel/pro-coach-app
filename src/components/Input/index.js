import React from 'react'

import { Container, TextInput } from './styles'

const Input = ({
  handleOnChange,
  handleOnSubmit,
  value,
  type,
  placeholder,
  width,
  height,
  returnKeyType
}) => {
  return (
    <Container>
      <TextInput
        onChangeText={handleOnChange}
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
