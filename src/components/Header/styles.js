import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  margin-top: ${(props) => (props.platform.OS === 'android' ? '20px' : 0)};
`

export const Logo = styled.Image`
  width: 150px;
  height: 30px;
  margin: 15px 0;
`
