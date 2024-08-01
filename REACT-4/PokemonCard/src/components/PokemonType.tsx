import React from 'react';
import '../styles/PokemonCard.css';
import { pokemonTypeColorMap } from '../hooks/pokemonColorHash';

interface PokemonTypeProps {
  types: string[];
}

const PokemonType: React.FC<PokemonTypeProps> = ({ types }) => {
  return (
    <div className="pokemon-types">
      {types.map((type, index) => (
        <span key={index} className="type" style={{ backgroundColor: pokemonTypeColorMap[type] || '#68a090' }}>
          {type}
        </span>
      ))}
    </div>
  );
};

export default PokemonType;
