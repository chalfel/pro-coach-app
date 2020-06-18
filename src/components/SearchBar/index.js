import React from 'react';
import { Container, TextInput } from './styles';

const SearchBar = () => {
  return (
    <Container>
      <TextInput
        placeholder="Encontre coaches e games"
        placeholderTextColor="#aaa" />
    </Container>
  );
}

export default SearchBar;