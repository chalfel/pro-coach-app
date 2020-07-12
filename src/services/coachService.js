import { api, coachServiceEndpoint } from '../configs/connection'

export const getCoachService = async (params) => {
  const { data } = await api.get(`/${coachServiceEndpoint}`, params)
  return data
}

export const createCoachService = async (params, token) => {
  const { data } = await api.post(`/${coachServiceEndpoint}`, params, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}
