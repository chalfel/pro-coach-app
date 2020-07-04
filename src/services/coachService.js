import { api, coachServiceEndpoint } from '../configs/connection'

export const getCoachService = async (params) => {
  try {
    const { data } = await api.get(`/${coachServiceEndpoint}`, params)
    return data
  } catch (e) {
    return e
  }
}
