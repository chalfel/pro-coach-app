import { api, sessionEndpoint } from '../configs/connection'

export const signIn = async (user) => {
  const { data } = await api.post(`/${sessionEndpoint}`, user)
  return data
}
