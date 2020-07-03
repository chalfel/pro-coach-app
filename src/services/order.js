import { api, orderEndpoint } from '../configs/connection'

export const checkout = async (order, token) => {
  try {
    const { data } = await api.post(`/${orderEndpoint}`, order, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (e) {
    console.log(e)
    return false
  }
}
