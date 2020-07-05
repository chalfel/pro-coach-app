import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import * as file from '../services/file'

const getPermissionAsync = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  return status === 'granted'
}

export const uploadImage = async () => {
  try {
    const hasPermission = await getPermissionAsync()

    if (hasPermission) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      })

      if (!result.cancelled) {
        const { url } = await file.uploadImage(result)
        return url
      }
    }
  } catch (err) {
    console.error(err)
  }
}
