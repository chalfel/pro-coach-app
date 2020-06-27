import styled from 'styled-components/native'

export const Container = styled.View`
  height: ${(props) => props.size || '100px'};
  width: ${(props) => props.size || '100px'};
  background-color: #c4c4c4;
  border-radius: 50%;
  margin: 10px 0 20px 0;
`

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
`
