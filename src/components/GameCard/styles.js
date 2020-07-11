import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 200px;
  border-radius: 12px;
  margin: 0 0 16px 16px;
`

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  position: relative;
`

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  margin: 20px 0px;
`
