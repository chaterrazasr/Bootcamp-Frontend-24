import React from 'react';
import '../styles/PokemonCard.css';
import PokemonType from './PokemonType';

interface PokemonInfoProps {
  id: number;
  name: string;
  types: string[];
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ id, name, types }) => {
  return (
    <div className="pokemon-info">
      <p className="pokemon-id">#{id.toString().padStart(3, '0')}</p>
      <h1 className="pokemon-name">{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      <PokemonType types={types} />
    </div>
  );
};

export default PokemonInfo;
