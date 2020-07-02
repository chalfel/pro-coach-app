import React from 'react'

import { Info } from '..'

import { Feather as Icon } from '@expo/vector-icons'

const CoachPlanCreationSuccess = () => {
  return (
    <Info
      icon={<Icon name="check-circle" size={100} color="#00CA14" />}
      title="Finalizado!"
      description="Seu plano de coach foi publicado"
    />
  )
}

export default CoachPlanCreationSuccess
