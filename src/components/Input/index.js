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
  value = '',
  disabled,
  secret,
  multiline,
  returnKeyType,
  type = '',
  maxLength = 100
}) => {
  const [adaptiveHeight, setAdaptiveHeight] = useState(height)

  return (
    <Container height={adaptiveHeight}>
      <TextInput
        disabled={disabled}
        onChange={({ nativeEvent }) => handleOnChange(nativeEvent.text)}
        onSubmitEditing={({ nativeEvent }) => handleOnSubmit(nativeEvent.text)}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        width={width}
        height={height}
        value={value}
        multiline={multiline}
        keyboardType={keyboardType}
        secureTextEntry={secret}
        returnKeyType={returnKeyType}
        onContentSizeChange={(event) =>
          setAdaptiveHeight(
            Math.max(height, event.nativeEvent.contentSize.height)
          )
        }
      />
      {iconName && <StyledIcon name={iconName} size={24} color="#bbb" />}
    </Container>
  )
}

export default Input
