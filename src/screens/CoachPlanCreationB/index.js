import React, { useState, useContext } from 'react'

import { FormTitle, Input, Button } from '../../components'
import { api, coachServiceEndpoint } from '../../configs/connection'
import { AuthContext } from '../../contexts'
import { Container } from './styles'

const CoachPlanCreationB = ({ navigation, route }) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

  const { user } = useContext(AuthContext)
  const { game } = route.params

  const createPlan = () => {
    api
      .post(`/${coachServiceEndpoint}`, {
        name: title,
        description: description,
        user: user._id,
        price: price,
        game: game._id
      })
      .then(() => navigation.navigate('CoachPlanCreationSuccess'))
      .catch((err) => console.log(err))
  }

  return (
    <Container>
      <FormTitle>Crie seu novo plano {game.name}</FormTitle>
      <Input
        onChange={setTitle}
        placeholder="Título do plano"
        iconName="award"
      />
      <Input
        onChange={setPrice}
        placeholder="Preço"
        keyboardType="numeric"
        iconName="dollar-sign"
        type="money"
      />
      <Input
        onChange={setDescription}
        placeholder="Detalhe como será feito o coaching"
        iconName="clipboard"
        returnKeyType="done"
        multiline
      />
      <Button primary handleOnPress={createPlan}>
        Publicar
      </Button>
    </Container>
  )
}

export default CoachPlanCreationB
