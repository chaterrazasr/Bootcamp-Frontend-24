import React, { useState } from 'react';
import CardContainer from './components/CardContainer';
import PokemonImage from './components/PokemonImage';
import PokemonInfo from './components/PokemonInfo';
import usePokemon from './hooks/usePokemon';
import './styles/App.css';

const App: React.FC = () => {
  const [pokemonId, setPokemonId] = useState<number>(1);
  const { pokemon } = usePokemon(pokemonId);

  const handleNextPokemon = () => {
    const nextId = Math.floor(Math.random() * 898) + 1;
    setPokemonId(nextId);
  };

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const types = pokemon.types.map(typeInfo => typeInfo.type.name);

  return (
    <div className="app">
      <CardContainer pokemonId={pokemon.id}>
        <PokemonInfo id={pokemon.id} name={pokemon.name} types={types} />
        <PokemonImage id={pokemon.id} name={pokemon.name} />
      </CardContainer>
      <button onClick={handleNextPokemon}>Next Pokémon</button>
    </div>
  );
};

export default App;
