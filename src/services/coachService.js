import { api, coachServiceEndpoint } from '../configs/connection'

export const getCoachService = async (params) => {
  const { data } = await api.get(`/${coachServiceEndpoint}`, params)
  return data
}
