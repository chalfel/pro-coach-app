import { api, coachServicesEndpoint } from '../configs/connection'

export const getCoachService = async (params) => {
  try {
    const { data } = await api.get(`/${coachServicesEndpoint}`, params)
    return data
  } catch (e) {
    return e
  }
}
