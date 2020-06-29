import styled from 'styled-components/native'

export const Container = styled.View`
  height: ${(props) => props.size || '100px'};
  width: ${(props) => props.size || '100px'};
  border-radius: ${(props) => props.size / 2 || '50px'};
  background-color: #c4c4c4;
  margin: 10px 0 20px 0;
`

export const Image = styled.Image`
  height: ${(props) => props.size || '100px'};
  width: ${(props) => props.size || '100px'};
  border-radius: ${(props) => props.size / 2 || '50px'};
  position: relative;
`
