import React, { useState } from 'react'

import { Input, Button, FormTitle } from '../../components'
import { SafeAreaView } from './styles'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleOnEmailChange = (e) => {
    const email = e.target.value
    setUser((prev) => ({ ...prev, email }))
  }

  const handleOnPasswordChange = (e) => {
    const password = e.target.value
    console.log(password)
    setUser((prev) => ({ ...prev, password }))
  }

  const handleOnLogin = (e) => {
    e.preventDefault()

    console.log(user)
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
