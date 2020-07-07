import React, { useState, useEffect } from 'react'

import { ImageUpload, Input, Button, FormTitle } from '../../components'
import { api, userEndpoint } from '../../configs/connection'
import { uploadImage } from '../../utils/uploadImages'
import { ScrollView, Container, TopContainer } from './styles'

const Register = ({ navigation }) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [user, setUser] = useState({
    imgUrl: null,
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  useEffect(() => {
    const { username, email, password, confirmPassword } = user
    const emailRegex = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)
    if (
      username !== '' &&
      email !== '' &&
      emailRegex.test(email) &&
      password !== '' &&
      confirmPassword !== '' &&
      confirmPassword === password
    ) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [user])
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
    <Container>
      <ScrollView>
        <TopContainer>
          <FormTitle>Vamos começar</FormTitle>
          <ImageUpload handleOnUpload={handleOnUpload} imgSrc={user.imgUrl} />
        </TopContainer>
        <Input
          placeholder="E-mail"
          handleOnChange={handleOnEmailChange}
          value={user.email}
          iconName="mail"
        />
        <Input
          placeholder="Nome de usuário"
          handleOnChange={handleOnUsernameChange}
          value={user.username}
          iconName="user"
        />
        <Input
          placeholder="Senha"
          secret
          handleOnChange={handleOnPasswordChange}
          value={user.password}
          iconName="lock"
        />
        <Input
          placeholder="Confirme sua senha"
          handleOnChange={handleOnConfirmPasswordChange}
          secret
          value={user.confirmPassword}
          iconName="lock"
        />
        <Button primary handleOnPress={handleOnRegister} disabled={isDisabled}>
          Cadastrar
        </Button>
      </ScrollView>
    </Container>
  )
}
export default Register
