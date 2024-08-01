import { useEffect, useState } from 'react';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

interface Pokemon {
  id: number;
  name: string;
  types: { type: { name: string } }[];
}

const usePokemon = (id: number) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`${API_URL}${id}`);
        const data: Pokemon = await response.json();
        setPokemon(data);
      } catch (err) {
        console.error('Error fetching Pokemon:', err);
      }
    };

    fetchPokemon();
  }, [id]);

  return { pokemon };
};

export default usePokemon;
