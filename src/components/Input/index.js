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
  const handleInputText = (e) => {
    const value = e.nativeEvent.text
    handleOnChange(value)
  }
  return (
    <Container>
      <TextInput
        disabled={disabled}
        onChange={handleInputText}
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
