import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styled from 'styled-components/native'

export const ScrollView = styled.ScrollView``

export const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
  background-color: #fff;
`

export const TopContainer = styled.View`
  margin: 20px 0;
  flex-direction: column;
  justify-content: flex-start;
`
