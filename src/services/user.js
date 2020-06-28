import { api, userEndpoint } from '../configs/connection'

export const updateUserInfo = async (user, token) => {
  try {
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
      return response.data
    } else {
      return false
    }
  } catch (e) {
    return e
  }
}
