import React, { useState, createContext } from 'react'

import * as auth from '../services/auth'
import { updateUserInfo } from '../services/user'
const INITIAL_STATE = {
  token: null,
  signed: false,
  user: {
    username: '',
    email: '',
    name: '',
    imgUrl: '',
    discord: '',
    skype: '',
    pro: false
  }
}
const AuthContext = createContext(INITIAL_STATE)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState()
  const [user, setUser] = useState(INITIAL_STATE.user)

  const signIn = async (tmpUser) => {
    const response = await auth.signIn(tmpUser)
    setToken(response.token)
    setUser((prev) => ({ ...prev, ...response.user }))
    return response
  }

  const signOut = () => {
    setToken(false)
    setUser(INITIAL_STATE.user)
  }
  const updateUser = async (userInfo) => {
    const newUser = await updateUserInfo(userInfo, token)
    setUser((prev) => ({ ...prev, ...newUser }))
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
