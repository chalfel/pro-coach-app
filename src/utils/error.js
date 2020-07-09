import { Alert } from 'react-native'

export const handleGenericApiError = (handler) => {
  Alert.alert(
    'Erro',
    'Houve um erro para obter os dados',
    [
      {
        text: 'Tentar novamente',
        onPress: handler
      }
    ],
    { cancelable: false }
  )
}
