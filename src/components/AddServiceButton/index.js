import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Button } from './styles';

const AddServiceButton = ({ handleOnPress }) => {
  return (
    <Button onPress={handleOnPress}>
      <Icon name="plus" size={30} color="#fff" />
    </Button>
  );
}

export default AddServiceButton;