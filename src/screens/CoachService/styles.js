import styled from 'styled-components/native'

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`

export const TopContainer = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const PlanInfo = styled.View`
  flex-direction: column;
  height: 55%;
`

export const DescriptionContainer = styled.ScrollView``

export const CoachName = styled.Text`
  color: #5b5b5b;
  font-size: 24px;
`

export const PlanDescription = styled.Text`
  color: #a3a3a3;
  font-size: 16px;
  margin: 16px;
`
