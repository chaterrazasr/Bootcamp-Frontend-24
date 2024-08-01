import React, { ReactNode } from 'react';
import '../styles/PokemonCard.css';
import { pokemonColorMap } from '../hooks/pokemonColorHash';

interface CardContainerProps {
  children: ReactNode;
  pokemonId: number;
}

const CardContainer: React.FC<CardContainerProps> = ({ children, pokemonId }) => {
  const backgroundColor = pokemonColorMap[pokemonId.toString()] || '#fff';

  return (
    <div className="card-container" style={{ backgroundColor }}>
      {children}
      <img className="pokeball-bg" src="pokeball-background.jpg" alt="Pokeball Background" />
    </div>
  );
};

export default CardContainer;
