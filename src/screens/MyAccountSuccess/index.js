import React from 'react'

import { Feather as Icon } from '@expo/vector-icons'

import Info from '../Info'

const CheckoutSuccess = () => {
  return (
    <Info
      icon={<Icon name="check-circle" size={100} color="#00CA14" />}
      title={'Sucesso'}
      description="Seus dados foram atualizados com sucesso."
    />
  )
}
export default CheckoutSuccess
