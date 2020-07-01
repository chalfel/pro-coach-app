import React, { useContext } from 'react'

import { ProfileImage, Button, FormSubtitle, FormTitle } from '../../components'
import { AuthContext } from '../../contexts'
import { checkout } from '../../services/order'
import { SafeAreaView } from './styles'

const CoachService = ({ navigation, route }) => {
  const { service } = route.params
  const { user } = service
  const { token, signed } = useContext(AuthContext)
  const handleOnCheckout = async () => {
    if (!signed) {
      navigation.navigate('Login', {
        redirect: {
          screen: 'CoachService',

          params: {
            service
          }
        }
      })
      return
    }
    const newOrder = {
      user: user._id,
      proService: service._id,
      price: service.price
    }
    const { uri } = await checkout(newOrder, token)
    navigation.navigate('Checkout', { uri })
  }
  return (
    <SafeAreaView>
      <ProfileImage imgSrc={service.imgUrl || ''}></ProfileImage>
      <FormTitle>{service.user.username || ''}</FormTitle>
      <FormSubtitle>Informações pessoais</FormSubtitle>
      <FormSubtitle>Informações pessoais</FormSubtitle>
      <FormSubtitle>Informações pessoais</FormSubtitle>
      <FormSubtitle>Informações pessoais</FormSubtitle>
      <Button primary handleOnPress={handleOnCheckout}>
        Continuar por R$ {service.price}
      </Button>
    </SafeAreaView>
  )
}

export default CoachService
