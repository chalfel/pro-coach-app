import { api, sessionEndpoint } from '../configs/connection'

export const signIn = async (user) => {
  const { data } = await api.post(`/${sessionEndpoint}`, user)
  return data
}

export const restoreSession = async (token) => {
  const { data } = await api.get(`/${sessionEndpoint}`, {
    headers: { authorization: `Bearer ${token}` }
  })
  return data
}
