import React from 'react'

import {
  ImageUpload,
  Button,
  Input,
  FormSubtitle,
  FormTitle
} from '../../components'
import { SafeAreaView } from './styles'

const CoachService = ({ route }) => {
  return (
    <SafeAreaView>
      <ImageUpload handleOnUpload imgSrc></ImageUpload>
      <FormTitle>Informações pessoais</FormTitle>
      <FormSubtitle>Informações pessoais</FormSubtitle>
      <Input placeholder="Username" handleOnChange value />
      <Input disabled placeholder="E-mail" handleOnChange value />
      <Input placeholder="Discord" handleOnChange value />
      <Input placeholder="Skype" handleOnChange value />
      <Button primary handleOnPress>
        Salvar alterações
      </Button>
      <Button handleOnPress>Logout</Button>
    </SafeAreaView>
  )
}

export default CoachService
