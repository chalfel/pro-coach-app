import React, { useContext } from 'react'

import { ProfileImage, FormTitle, Button, Rating } from '../../components'
import { AuthContext } from '../../contexts'
import { checkout } from '../../services/order'
import {
  SafeAreaView,
  TopContainer,
  CoachName,
  PlanInfo,
  PlanDescription,
  DescriptionContainer
} from './styles'

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
    }

    const newOrder = {
      user: user._id,
      proService: service._id,
      price: service.price
    }

    try {
      const { uri } = await checkout(newOrder, token)
      navigation.navigate('Checkout', { uri })
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <SafeAreaView>
      <TopContainer>
        <ProfileImage imgSrc={service.imgUrl}></ProfileImage>
        <Rating score={service.rating || 0}></Rating>
        <CoachName>{service.user.username || ''}</CoachName>
      </TopContainer>
      <PlanInfo>
        <FormTitle>{service.name}</FormTitle>
        <DescriptionContainer>
          <PlanDescription>{service.description}</PlanDescription>
        </DescriptionContainer>
      </PlanInfo>
      <Button primary handleOnPress={handleOnCheckout}>
        Continuar por R$ {service.price}
      </Button>
    </SafeAreaView>
  )
}

export default CoachService
