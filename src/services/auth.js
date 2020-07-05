import { api, sessionEndpoint } from '../configs/connection'

export const signIn = async (user) => {
  const { data } = await api.post(`/${sessionEndpoint}`, user)
  return data
}

export const restoreSession = async (token) => {
  const response = await api.get(`/${sessionEndpoint}`, {
    headers: { authorization: `Bearer ${token}` }
  })
  return response
}
