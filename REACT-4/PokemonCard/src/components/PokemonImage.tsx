import React from 'react';
import '../styles/PokemonCard.css';

interface PokemonImageProps {
  id: number;
  name: string;
}

const PokemonImage: React.FC<PokemonImageProps> = ({ id, name }) => {
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.toString().padStart(3, '0')}.png`;
  return <img className="pokemon-image" src={imageUrl} alt={name} />;
};

export default PokemonImage;
