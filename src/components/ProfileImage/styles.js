import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${props => props.size || '100px'};
  width: ${props => props.size || '100px'};
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
`;
