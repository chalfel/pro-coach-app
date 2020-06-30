import React, { useState } from 'react'

import { ImageUpload, Input, Button, FormTitle } from '../../components'
import { api, userEndpoint } from '../../configs/connection'
import { uploadImage } from '../../utils/uploadImages'
import { ScrollView, SafeAreaView, TopContainer } from './styles'

const Register = ({ navigation }) => {
  const [user, setUser] = useState({
    imgUrl: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleOnEmailChange = (email) => {
    setUser((prev) => ({ ...prev, email }))
  }
  const handleOnUsernameChange = (username) => {
    setUser((prev) => ({ ...prev, username }))
  }

  const handleOnPasswordChange = (password) => {
    setUser((prev) => ({ ...prev, password }))
  }
  const handleOnConfirmPasswordChange = (confirmPassword) => {
    setUser((prev) => ({ ...prev, confirmPassword }))
  }

  const validateForm = () => {
    if (
      !user.email.length === 0 ||
      !user.username.length === 0 ||
      !user.password.length === 0 ||
      !user.confirmPassword.length === 0
    ) {
      return false
    }
    return true
  }
  const handleOnRegister = (e) => {
    e.preventDefault()
    const isValid = validateForm()
    if (!isValid) {
      return
    }
    if (user.confirmPassword !== user.password) {
      return false
    }
    api
      .post(`/${userEndpoint}`, user)
      .then(() => {
        navigation.navigate('RegisterSuccess', { username: user.username })
      })
      .catch((e) => console.log(e))
  }

  const handleOnUpload = async (e) => {
    const imgUrl = await uploadImage()
    setUser((prev) => ({ ...prev, imgUrl }))
  }
  return (
    <ScrollView>
      <SafeAreaView>
        <TopContainer>
          <FormTitle>Vamos começar</FormTitle>
          <ImageUpload handleOnUpload={handleOnUpload} imgSrc={user.imgUrl} />
        </TopContainer>
        <Input
          placeholder="E-mail"
          handleOnChange={handleOnEmailChange}
          value={user.email}
        />
        <Input
          placeholder="Nome de usuário"
          handleOnChange={handleOnUsernameChange}
          value={user.username}
        />
        <Input
          placeholder="Senha"
          type="password"
          handleOnChange={handleOnPasswordChange}
          value={user.password}
        />
        <Input
          placeholder="Confirme sua senha"
          handleOnChange={handleOnConfirmPasswordChange}
          type="password"
          value={user.confirmPassword}
        />
        <Button primary handleOnPress={handleOnRegister}>
          Cadastrar
        </Button>
      </SafeAreaView>
    </ScrollView>
  )
}
export default Register
