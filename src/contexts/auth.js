import React, { useState, createContext } from 'react'

import * as auth from '../services/auth'
import { updateUserInfo } from '../services/user'

const initialState = {
  token: null,
  signed: false,
  user: {
    username: '',
    email: '',
    name: '',
    imgUrl: null,
    discord: '',
    skype: '',
    pro: false
  }
}

const AuthContext = createContext(initialState)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState()
  const [user, setUser] = useState(initialState.user)

  const signIn = async (tmpUser) => {
    try {
      const response = await auth.signIn(tmpUser)
      setToken(response.token)
      setUser((prev) => ({ ...prev, ...response.user }))
      return response
    } catch (err) {
      console.error(err)
    }
  }

  const signOut = () => {
    setToken(false)
    setUser(initialState.user)
  }

  const updateUser = async (userInfo) => {
    try {
      const newUser = await updateUserInfo(userInfo, token)
      setUser((prev) => ({ ...prev, ...newUser }))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{ token, signed: !!token, signIn, user, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
