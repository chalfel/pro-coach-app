import { api, fileEndpoint } from '../configs/connection'
import { dataURLtoBlob } from '../utils/convertDataUrlToBlob'

export const uploadImage = async (img, token) => {
  try {
    const blobImage = dataURLtoBlob(img)
    const formData = new FormData()
    console.log(blobImage)
    formData.append('file', blobImage)
    const response = await api.post(`/${fileEndpoint}`, formData)
    console.log(response)
    if (response.status === 200) {
      return response.data
    } else {
      return false
    }
  } catch (e) {
    return e
  }
}
