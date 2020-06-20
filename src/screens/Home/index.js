import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Header, SearchBar, Card } from '../../components';
import { Container, Title } from './styles';
// import axios from 'axios';

const Home = () => {
  const [proServices, setProServices] = useState([]);

  useEffect(() => {
    // const services = axios
    //   .get('https://procoach-prod.herokuapp.com/user')
    //   .then(res => setProServices(res.data))
    //   .catch(console.log)
  });

  return (
    <Container>
      <Header />
      <SearchBar></SearchBar>
      <Title>
        Top coaches
        <Icon name="chevron-right" size={18} />
      </Title>
      <Card
        coachName="Super coach"
        gameTitle="FIFÃO"
        serviceTitle="Esse é meu serviço"
        serviceDetails="Você vai curtir pra carai esse serviço!!!!!"
        score="4.3" />
      <Title>
        Últimos lançamentos
        <Icon name="chevron-right" size={18} />
      </Title>
      <Card
        coachName="Super coach"
        gameTitle="FIFÃO"
        serviceTitle="Esse é meu serviço"
        serviceDetails="Você vai curtir pra carai esse serviço!!!!!"
        score="4.3" />
    </Container>
  );
}

export default Home;