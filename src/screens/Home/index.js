import React, { useState, useEffect } from 'react';
import { SearchBar } from '../../components';
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
      <SearchBar></SearchBar>
      {
        // proServices.map(service => <Card></Card>)
      }
    </Container>
  );
}

export default Home;