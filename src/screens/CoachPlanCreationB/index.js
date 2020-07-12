import React, { useState, useContext, useEffect } from 'react'

import { FormTitle, Input, Button } from '../../components'
import { AuthContext } from '../../contexts'
import { createCoachService } from '../../services/coachService'
import { handleGenericApiError } from '../../utils/error'
import mask from '../../utils/inputMasks'
import { Container } from './styles'

const CoachPlanCreationB = ({ navigation, route }) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const { applyMask, getRawText } = mask('money')
  const { user, token } = useContext(AuthContext)
  const { game } = route.params

  useEffect(() => {
    if (title !== '' && price !== '' && description !== '') {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [title, price, description])

  const createPlan = () => {
    const payload = {
      name: title,
      description: description,
      user: user._id,
      price: parseFloat(getRawText(price)),
      game: game._id
    }
    createCoachService(payload, token)
      .then(() => navigation.navigate('CoachPlanCreationSuccess'))
      .catch(() => handleGenericApiError(createPlan))
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
      <Button primary handleOnPress={createPlan} disabled={isDisabled}>
        Publicar
      </Button>
    </Container>
  )
}

export default CoachPlanCreationB
