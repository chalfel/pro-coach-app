import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import * as file from '../services/file'

const getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status !== 'granted') {
      return false
    }
  } else {
    const { status } = await ImagePicker.getCameraRollPermissionsAsync(
      Permissions.CAMERA_ROLL
    )
    if (status !== 'granted') {
      return false
    }
  }
  return true
}

export const uploadImage = async (token) => {
  const hasPermission = await getPermissionAsync()
  if (hasPermission) {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      })
      if (!result.cancelled) {
        const { url } = await file.uploadImage(result.uri)
        return url
      }
    } catch (e) {
      console.log(e)
    }
  }
}
