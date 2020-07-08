import React, { useState, useContext, useEffect } from 'react'

import { Input, Button, FormTitle } from '../../components'
import { AuthContext } from '../../contexts'
import { SafeAreaView } from './styles'

const Login = ({ navigation, route }) => {
  const { signIn } = useContext(AuthContext)
  const [redirectInfo, setRedirectInfo] = useState()
  const [isDisabled, setIsDisabled] = useState(true)
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

  useEffect(() => {
    const { email, password } = user
    const emailRegex = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)
    if (email !== '' && emailRegex.test(email) && password !== '') {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [user])

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
        iconName="mail"
      />
      <Input
        secret
        placeholder="Senha"
        handleOnChange={handleOnPasswordChange}
        value={user.password}
        iconName="lock"
      />
      <Button primary handleOnPress={handleOnLogin} disabled={isDisabled}>
        Entrar
      </Button>
    </SafeAreaView>
  )
}
export default Login
