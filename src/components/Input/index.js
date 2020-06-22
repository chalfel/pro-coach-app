import React from 'react';

import { Container } from './styles';

const Input = ({ handleOnChange, value, type, placeholder, width, height }) => (
  <Container
    placeholder={placeholder}
    onChange={handleOnChange}
    value={value}
    type={type}
    width={width}
    height={height}
  />
);

export default Input;
