import styled from 'styled-components/native'

export const Touchable = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 8px;
  margin: 16px;
  background-color: ${(props) => (props.primary ? '#9c0000' : '#fff')};
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  border: ${(props) => (props.primary ? '0' : '1px solid #aaa')};
`

export const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.primary ? '#fff' : '#aaa')};
`
