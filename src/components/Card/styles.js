import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

const { width, height } = Dimensions.get('window')

export const TouchableContainer = styled.TouchableOpacity`
  background: #fff;
  box-shadow: 2px 2px 10px #ddd;
  elevation: 3;
  margin: 16px 0 16px 16px;
  padding: 16px;
  width: ${width * 0.8}px;
  height: ${height * 0.25}px;
  border-radius: 8px;
`

export const Container = styled.View``

export const TitleContainer = styled.View`
  flex-direction: row;
`

export const Title = styled.View`
  margin-left: 16px;
`

export const CoachName = styled.Text`
  font-size: 20px;
  color: #5b5b5b;
`

export const GameTitle = styled.Text`
  font-style: italic;
  color: #a3a3a3;
  margin: 2px 0 8px 0;
`

export const ProfilePicture = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 35px;
`

export const ServiceTitle = styled.Text`
  margin-top: 16px;
  font-size: 18px;
  color: #5b5b5b;
`

export const ServiceDetails = styled.Text`
  margin-top: 16px;
  font-style: italic;
  color: #a3a3a3;
`
