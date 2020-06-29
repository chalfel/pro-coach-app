import React, { useState } from 'react'

import { ImageUpload, Input, Button, FormTitle } from '../../components'
import { api, userEndpoint } from '../../configs/connection'
import { uploadImage } from '../../utils/uploadImages'
import { SafeAreaView, TopContainer } from './styles'

const Register = ({ navigation }) => {
  const [user, setUser] = useState({
    imgUrl: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleOnEmailChange = (e) => {
    const email = e.target.value
    setUser((prev) => ({ ...prev, email }))
  }
  const handleOnUsernameChange = (e) => {
    const username = e.target.value
    setUser((prev) => ({ ...prev, username }))
  }

  const handleOnPasswordChange = (e) => {
    const password = e.target.value
    setUser((prev) => ({ ...prev, password }))
  }
  const handleOnConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value
    setUser((prev) => ({ ...prev, confirmPassword }))
  }

  const validateForm = () => {
    if (
      !user.email ||
      !user.username ||
      !user.password ||
      !user.confirmPassword
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
  )
}
export default Register
