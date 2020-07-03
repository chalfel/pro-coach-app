import React, { useContext } from 'react'

import { Feather as Icon } from '@expo/vector-icons'

import { AuthContext } from '../../contexts'
import Info from '../Info'

const CheckoutSuccess = () => {
  const { user } = useContext(AuthContext)
  return (
    <Info
      icon={<Icon name="check-circle" size={100} color="#00CA14" />}
      title={`Ótima compra, ${user.username}`}
      description="Sua compra foi finalizada com sucesso! Seu Pro Coach entrará em contato em breve."
    />
  )
}
export default CheckoutSuccess
