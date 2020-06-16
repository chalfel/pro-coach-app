import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header, NavBar } from './src/components';
import { Home } from './src/screens';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Home />
      <NavBar />
    </SafeAreaView>
  );
}

export default App;