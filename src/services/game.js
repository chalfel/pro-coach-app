import { api, gameEndpoint } from '../configs/connection'

export const getGames = async (token) => {
  const { data } = await api.get(`/${gameEndpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}
