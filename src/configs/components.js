import React from 'react'

import { Feather as Icon } from '@expo/vector-icons'

export const noNavHeader = {
  header: () => null
}

const NavBackButton = () => (
  <Icon name="chevron-left" size={24} color="#9c0000" />
)

export const defaultNavHeader = {
  headerBackImage: NavBackButton,
  headerBackTitleVisible: false,
  headerTitleStyle: {
    color: '#9c0000'
  },
  headerTitleAlign: 'center'
}
