import { api, userEndpoint } from '../configs/connection'

export const updateUserInfo = async (user, token) => {
  const response = await api.put(
    `/${userEndpoint}`,
    { user },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  if (response.status === 200) {
    const { data } = response
    return data
  }
  return false
}
