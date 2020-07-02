import { Feather as Icon } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: ${(props) => props.width || 'auto'};
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: #eee;
  margin: 16px;
`

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
  padding: 0 16px;
`

export const StyledIcon = styled(Icon)`
  margin-right: 16px;
`
