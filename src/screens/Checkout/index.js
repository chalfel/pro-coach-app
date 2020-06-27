import React from 'react'

import { Button, Header, Input, Container } from '../../components'
import { CardInfo, Text } from './styles'

const Checkout = () => {
  return (
    <Container>
      <Header />
      <Text> Digite suas informações: </Text>
      <Input placeholder="Nome Completo" type="text"></Input>
      <Input placeholder="CPF" type="text"></Input>
      <Input placeholder="Número do Cartão" type="text"></Input>
      <CardInfo>
        <Input placeholder="CVV" type="text" width="30%"></Input>
        <Input placeholder="Parcelas" type="text" width="30%"></Input>
        <Input placeholder="Validade" width="30%" type="text"></Input>
      </CardInfo>
      <Button text="Finalizar Compra" buttonColor="#9C0000"></Button>
    </Container>
  )
}
export default Checkout
