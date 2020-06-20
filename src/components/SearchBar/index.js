import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Container, TextInput } from './styles';

const SearchBar = () => {
  return (
    <Container>
      <Icon name="search" size={24} color="#aaa" />
      <TextInput
        placeholder="Encontre coaches e games"
        placeholderTextColor="#aaa" />
    </Container>
  );
}

export default SearchBar;