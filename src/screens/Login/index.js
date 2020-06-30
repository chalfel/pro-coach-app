import React, { useState, useContext } from 'react'
import { AsyncStorage } from 'react-native'

import { Input, Button, FormTitle } from '../../components'
import { AuthContext } from '../../contexts'
import { SafeAreaView } from './styles'

const Login = ({ navigation }) => {
  const { signIn } = useContext(AuthContext)
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleOnEmailChange = (email) => {
    setUser((prev) => ({ ...prev, email }))
  }

  const handleOnPasswordChange = (password) => {
    setUser((prev) => ({ ...prev, password }))
  }

  const handleOnLogin = async (e) => {
    e.preventDefault()
    const { token } = await signIn(user)
    await AsyncStorage.setItem('token', token)
  }
  return (
    <SafeAreaView>
      <FormTitle>Olá, seja bem-vindo</FormTitle>
      <Input
        placeholder="E-mail"
        handleOnChange={handleOnEmailChange}
        value={user.email}
      />
      <Input
        type="password"
        placeholder="Senha"
        handleOnChange={handleOnPasswordChange}
        value={user.password}
      />
      <Button primary handleOnPress={handleOnLogin}>
        Entrar
      </Button>
    </SafeAreaView>
  )
}
export default Login
