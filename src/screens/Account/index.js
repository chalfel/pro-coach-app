import React from 'react';
import { Header, Button, Input } from '../../components';
import { Container } from './styles';

const Account = () => {
  return (
    <Container>
      <Header />
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Button
        text="Entrar"
        buttonColor="#3b3"
        textColor="#fff"
        shadow />
      <Button
        text="Cadastrar"
        buttonColor="#fff"
        textColor="#333"
        borderColor="#eee" />
    </Container>
  );
}

export default Account;