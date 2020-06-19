import React from 'react';
import { Header, Button } from '../../components';
import { SafeAreaView, BottomView, Input } from './styles';

const Account = () => {
  return (
    <SafeAreaView>
      <Header />
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Button
        text="Entrar"
        buttonColor="#9c0000"
        textColor="#fff" />
      <Button
        text="Cadastrar"
        buttonColor="#fff"
        textColor="#000" />
    </SafeAreaView>
  );
}

export default Account;