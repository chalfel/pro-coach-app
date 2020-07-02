import React, { useState } from 'react'

import { Container, TextInput, StyledIcon } from './styles'

const Input = ({
  handleOnChange = () => {},
  handleOnSubmit = () => {},
  iconName,
  keyboardType,
  placeholder,
  width,
  height = 48,
  disabled,
  secret,
  multiline,
  returnKeyType,
  type = ''
}) => {
  const [adaptiveHeight, setAdaptiveHeight] = useState(48)
  const [value, setValue] = useState('')

  return (
    <Container height={adaptiveHeight}>
      <TextInput
        disabled={disabled}
        onChangeText={(text) => {
          setValue(text)
          handleOnChange(text)
        }}
        onSubmitEditing={({ nativeEvent }) => handleOnSubmit(nativeEvent.text)}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        width={width}
        value={value}
        multiline={multiline}
        keyboardType={keyboardType}
        secureTextEntry={secret}
        returnKeyType={returnKeyType}
        type={type}
        onContentSizeChange={(e) =>
          setAdaptiveHeight(Math.max(height, e.nativeEvent.contentSize.height))
        }
      />
      {iconName && <StyledIcon name={iconName} size={24} color="#bbb" />}
    </Container>
  )
}

export default Input
