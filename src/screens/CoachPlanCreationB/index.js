import React, { useState, useContext } from 'react'

import { FormTitle, Input, Button } from '../../components'
import { api, coachServiceEndpoint } from '../../configs/connection'
import { AuthContext } from '../../contexts'
import mask from '../../utils/inputMasks'
import { Container } from './styles'

const CoachPlanCreationB = ({ navigation, route }) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

  const { applyMask, getRawText } = mask('money')
  const { user } = useContext(AuthContext)
  const { game } = route.params

  const createPlan = () => {
    api
      .post(`/${coachServiceEndpoint}`, {
        name: title,
        description: description,
        user: user._id,
        price: parseFloat(getRawText(price)),
        game: game._id
      })
      .then(() => navigation.navigate('CoachPlanCreationSuccess'))
      .catch((err) => console.log(err))
  }

  return (
    <Container>
      <FormTitle>Crie seu novo plano {game.name}</FormTitle>
      <Input
        handleOnChange={setTitle}
        placeholder="Título do plano"
        iconName="award"
        value={title}
      />
      <Input
        handleOnChange={(text) => setPrice(applyMask(text))}
        placeholder="Preço"
        keyboardType="numeric"
        iconName="dollar-sign"
        value={price}
      />
      <Input
        handleOnChange={setDescription}
        placeholder="Detalhe como será feito o coaching"
        iconName="clipboard"
        returnKeyType="done"
        value={description}
        multiline
      />
      <Button primary handleOnPress={createPlan}>
        Publicar
      </Button>
    </Container>
  )
}

export default CoachPlanCreationB
