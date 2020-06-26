import React, { useState } from 'react'

import { ImageUpload, Input, Button, FormTitle } from '../../components'
import { SafeAreaView } from './styles'

const Register = ({ navigation }) => {
  const [user, setUser] = useState({
    imgUrl: '',
    name: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleOnEmailChange = (e) => {
    const email = e.target.value
    setUser((prev) => ({ ...prev, email }))
  }
  const handleOnNicknameChange = (e) => {
    const nickname = e.target.value
    setUser((prev) => ({ ...prev, nickname }))
  }

  const handleOnPasswordChange = (e) => {
    const password = e.target.value
    setUser((prev) => ({ ...prev, password }))
  }
  const handleOnConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value
    setUser((prev) => ({ ...prev, confirmPassword }))
  }

  const handleOnRegister = (e) => {
    e.preventDefault()
    navigation.navigate('RegisterSuccess')
    console.log(user)
  }

  return (
    <SafeAreaView>
      <FormTitle>Vamos começar</FormTitle>
      <ImageUpload imgSrc={user.imgUrl} />
      <Input
        placeholder="E-mail"
        handleOnChange={handleOnEmailChange}
        value={user.email}
      />
      <Input
        placeholder="Nome de usuário"
        handleOnChange={handleOnNicknameChange}
        value={user.nickname}
      />
      <Input
        placeholder="Discord"
        type="password"
        handleOnChange={handleOnPasswordChange}
        value={user.password}
      />
      <Input
        placeholder="Skype"
        handleOnChange={handleOnConfirmPasswordChange}
        type="password"
        value={user.confirmPassword}
      />
      <Button primary handleOnPress={handleOnRegister}>
        Cadastrar
      </Button>
    </SafeAreaView>
  )
}
export default Register
