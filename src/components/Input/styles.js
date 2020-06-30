import { Feather as Icon } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
  height: ${(props) => props.height || '48px'};
  width: ${(props) => props.width || 'auto'};
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: #eee;
  margin: 16px;
`

export const TextInput = styled.TextInput`
  flex-grow: 1;
  height: ${(props) => props.height || '48px'};
  margin: 0;
  font-size: 18px;
  padding: 16px;
`

export const StyledIcon = styled(Icon)`
  margin-right: 16px;
`
