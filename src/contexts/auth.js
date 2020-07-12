import React, { useState, createContext } from 'react'
import { AsyncStorage } from 'react-native'

import * as auth from '../services/auth'
import { updateUserInfo } from '../services/user'
import { handleGenericApiError } from '../utils/error'

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
      handleGenericApiError(getToken)
    }
  }

  const verifyLogin = async () => {
    const savedToken = await getToken()
    if (savedToken) {
      try {
        const user = await auth.restoreSession(savedToken)
        setLogedInfo(savedToken, user)
      } catch (err) {
        // handleGenericApiError(verifyLogin)
      }
    }
  }

  const signIn = async (tmpUser) => {
    try {
      const { token, user } = await auth.signIn(tmpUser)
      setLogedInfo(token, user)
    } catch (err) {
      handleGenericApiError(signIn)
    }
  }

  const setLogedInfo = async (newToken, user) => {
    try {
      await AsyncStorage.setItem('token', newToken)
      setToken(newToken)
      setUser((prev) => ({ ...prev, ...user }))
    } catch (err) {
      handleGenericApiError(setLogedInfo)
    }
  }

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('token')
      setToken(false)
      setUser(initialState.user)
    } catch (err) {
      handleGenericApiError(signOut)
    }
  }

  const updateUser = async (userInfo) => {
    try {
      const newUser = await updateUserInfo(userInfo, token)
      if (!newUser) {
        signOut()
      }
      setUser((prev) => ({ ...prev, ...newUser }))
    } catch (err) {
      handleGenericApiError(updateUser)
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
