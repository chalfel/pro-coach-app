import React, { useState, useEffect } from 'react';
import { Header, SearchBar } from '../../components';
import { Container } from './styles';
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
    </Container>
  );
}

export default Home;