import { api, fileEndpoint } from '../configs/connection'

export const uploadImage = async (img) => {
  const formData = new FormData()
  const name = img.uri.split('ImagePicker')[1]

  formData.append('file', {
    uri: img.uri,
    type: 'image/jpeg',
    name
  })

  const { data } = await api.post(`/${fileEndpoint}`, formData)

  return data
}
