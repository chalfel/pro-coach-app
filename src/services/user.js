import { api, userEndpoint } from '../configs/connection'

export const updateUserInfo = async (user, token) => {
  const { data } = await api.put(
    `/${userEndpoint}`,
    { user },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  return data
}
