import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View``;

const Value = styled.Text``;

const StarImage = styled.Image`
  width: 10px;
  height: 10px;
`;

const Rating = () => {
  return (
    <Container>
      <Value>3.0</Value>
      <StarImage source="https://picsum.photos/200" />
    </Container>
  );
}

export default Rating;