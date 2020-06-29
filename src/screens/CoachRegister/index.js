import React, { useState } from 'react'
import { Platform } from 'react-native'

import { FormTitle, Input, Button } from '../../components'
import { api, coachesEndpoint } from '../../configs/connection'
import { KeyboardAvoidingView } from './styles'

const CoachService = ({ navigation }) => {
  const [value, setValue] = useState('')

  const saveCoachEmail = () => {
    const payload = {
      email: value
    }

    api
      .post(`/${coachesEndpoint}`, payload)
      .then(() => {
        navigation.navigate('CoachRegisterSuccess')
      })
      .catch((e) => console.log(e))
  }

  const handleOnChange = ({ target }) => {
    const email = target.value
    setValue(email)
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
        handleOnChange={handleOnChange}
        handleOnSubmit={() => {}}
      ></Input>
      <Button primary handleOnPress={saveCoachEmail}>
        Enviar
      </Button>
    </KeyboardAvoidingView>
  )
}

export default CoachService
