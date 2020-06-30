import { api, fileEndpoint } from '../configs/connection'
// import { dataURLtoBlob } from '../utils/convertDataUrlToBlob'

export const uploadImage = async (img) => {
  try {
    const formData = new FormData()
    const name = img.uri.split('ImagePicker')[1]
    try {
      formData.append('file', {
        uri: img.uri,
        type: 'image/jpeg',
        name
      })
    } catch (e) {
      console.log(e)
    }
    const response = await api.post(`/${fileEndpoint}`, formData)
    if (response.status === 200) {
      return response.data
    } else {
      return false
    }
  } catch (e) {
    console.log('eae')
    console.log(e)
    return e
  }
}
