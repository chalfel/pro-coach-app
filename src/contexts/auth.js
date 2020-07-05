import React, { useState, createContext } from 'react'
import { AsyncStorage } from 'react-native'

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
  const getToken = async () => {
    try {
      if (!token) {
        const savedToken = await AsyncStorage.getItem('token')
        if (!savedToken) {
          return
        }
        return savedToken
      }
      return token
    } catch (err) {
      console.error(err)
    }
  }

  const verifyLogin = async () => {
    const savedToken = await getToken()
    if (savedToken) {
      try {
        const user = await auth.restoreSession(savedToken)
        setLogedInfo(savedToken, user)
      } catch (e) {
        console.log(e)
      }
    }
  }
  const signIn = async (tmpUser) => {
    try {
      const { token, user } = await auth.signIn(tmpUser)
      setLogedInfo(token, user)
    } catch (err) {
      console.error(err)
    }
  }

  const setLogedInfo = async (newToken, user) => {
    await AsyncStorage.setItem('token', newToken)
    setToken(newToken)
    setUser((prev) => ({ ...prev, ...user }))
  }

  const signOut = async () => {
    await AsyncStorage.removeItem('token')
    setToken(false)
    setUser(initialState.user)
  }

  const updateUser = async (userInfo) => {
    try {
      const newUser = await updateUserInfo(userInfo, token)
      if (!newUser) {
        signOut()
      }
      setUser((prev) => ({ ...prev, ...newUser }))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        signed: !!token,
        signIn,
        user,
        signOut,
        updateUser,
        verifyLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
