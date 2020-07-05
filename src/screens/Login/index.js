import React, { useState, useContext, useEffect } from 'react'

import { Input, Button, FormTitle } from '../../components'
import { AuthContext } from '../../contexts'
import { SafeAreaView } from './styles'

const Login = ({ navigation, route }) => {
  const { signIn } = useContext(AuthContext)
  const [redirectInfo, setRedirectInfo] = useState()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (route.params) {
      const { redirect } = route.params
      setRedirectInfo(redirect)
    }
  }, [])
  const handleOnEmailChange = (email) => {
    setUser((prev) => ({ ...prev, email }))
  }

  const handleOnPasswordChange = (password) => {
    setUser((prev) => ({ ...prev, password }))
  }

  const handleOnLogin = async (e) => {
    e.preventDefault()
    await signIn(user)
    if (redirectInfo) {
      navigation.navigate(redirectInfo.screen, redirectInfo.params)
    }
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
        secret
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
