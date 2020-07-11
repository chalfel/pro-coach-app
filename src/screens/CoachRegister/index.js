import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'

import { FormTitle, Input, Button } from '../../components'
import { api, coachEndpoint } from '../../configs/connection'
import { KeyboardAvoidingView } from './styles'

const CoachService = ({ navigation }) => {
  const [value, setValue] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  useEffect(() => {
    const regex = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)
    if (regex.test(value)) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [value])
  const saveCoachEmail = () => {
    const payload = {
      email: value
    }

    api
      .post(`/${coachEndpoint}`, payload)
      .then(() => {
        navigation.navigate('CoachRegisterSuccess')
      })
      .catch((e) => console.log(e))
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <FormTitle>Deixe seu e-mail e nós entraremos em contato!</FormTitle>
      <Input
        placeholder="E-mail"
        returnKeyType="done"
        value={value}
        handleOnChange={setValue}
        handleOnSubmit={() => {}}
      ></Input>
      <Button primary handleOnPress={saveCoachEmail} disabled={isDisabled}>
        Enviar
      </Button>
    </KeyboardAvoidingView>
  )
}

export default CoachService
