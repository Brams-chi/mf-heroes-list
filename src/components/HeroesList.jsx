import { useState, useEffect } from 'react'
import ListCards from './ListCards';
import { Paper, Typography } from '@mui/material';
import Loader from './Loader';

const HeroesList = () => {
  const [heroes, setHeroes] = useState([]);
  const apiKey = 'c31c2736178d3d13ef14c15b5a033ef2'
  const apiUrl = `https://gateway.marvel.com/v1/public/events?apikey=${apiKey}`

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setHeroes(data.data.results.reverse().slice(0,8));
      } catch (error) {
        console.error('Error obteniendo data:', error);
      }
    };

    fetchHeroes();
  }, [apiUrl]);

  return (
    <Paper
      elevation={0}
      sx={{
        padding: '20px 0px',
        minWidth: '100vw'
      }}
    >
      <Typography
        sx={{
          marginLeft: '20px'
        }}
        variant="h4"
        color="text.primary"
      >
        Comics Superheroes Marvel
      </Typography>
      {heroes.length >= 1 ? (
        <ListCards heroes={heroes}/>
      ) : (
        <Loader />
      )}
    </Paper>
  );
};

export default HeroesList