import React, { useState } from 'react'

import { ImageUpload, Input, Button, FormTitle } from '../../components'
import { api, userEndpoint } from '../../configs/connection'
import { uploadImage } from '../../utils/uploadImages'
import { ScrollView, SafeAreaView, TopContainer } from './styles'

const Register = ({ navigation }) => {
  const [user, setUser] = useState({
    imgUrl: null,
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

  const handleOnRegister = (e) => {
    e.preventDefault()
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
    <SafeAreaView behavior="height">
      <ScrollView>
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
          secret
          handleOnChange={handleOnPasswordChange}
          value={user.password}
        />
        <Input
          placeholder="Confirme sua senha"
          handleOnChange={handleOnConfirmPasswordChange}
          secret
          value={user.confirmPassword}
        />
        <Button primary handleOnPress={handleOnRegister}>
          Cadastrar
        </Button>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Register
