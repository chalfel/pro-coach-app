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
  type = 'text',
  maxLength = 100
}) => {
  const [adaptiveHeight, setAdaptiveHeight] = useState(height)
  const [value, setValue] = useState('')

  const mask = (text) => {
    const slicedText = text.slice(0, maxLength)

    const textFormatters = {
      text: (text) => ({
        formattedText: text,
        rawText: text
      }),
      money: (text) => {
        const numericValue = parseFloat(text.replace(/[^0-9]/g, '')).toFixed(2)
        const price = isNaN(numericValue)
          ? (0).toFixed(2)
          : (numericValue / 100).toFixed(2)

        return {
          formattedText: `R$ ${price}`,
          rawText: price
        }
      }
    }

    return textFormatters[type](slicedText)
  }

  const handleOnChangeText = (text) => {
    const { formattedText, rawText } = mask(text)
    setValue(formattedText)
    handleOnChange(rawText)
  }

  return (
    <Container height={adaptiveHeight}>
      <TextInput
        disabled={disabled}
        onChange={({ nativeEvent }) => handleOnChangeText(nativeEvent.text)}
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
        onContentSizeChange={(e) =>
          setAdaptiveHeight(Math.max(height, e.nativeEvent.contentSize.height))
        }
      />
      {iconName && <StyledIcon name={iconName} size={24} color="#bbb" />}
    </Container>
  )
}

export default Input
