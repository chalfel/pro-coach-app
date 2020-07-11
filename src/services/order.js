import { api, orderEndpoint } from '../configs/connection'

export const checkout = async (order, token) => {
  const { data } = await api.post(`/${orderEndpoint}`, order, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data
}
