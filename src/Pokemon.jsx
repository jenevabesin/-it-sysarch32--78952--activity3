import React from 'react';

function Pokemon({ pokemon, language }) {
  const getNameByLanguage = () => {
    switch (language) {
      case 'japanese':
        return pokemon.name.japanese;
      case 'chinese':
        return pokemon.name.chinese;
      case 'french':
        return pokemon.name.french;
      default:
        return pokemon.name.english;
    }
  };

  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name.english} className="pokemon-image" />
      <div className="pokemon-details">
        <p>ID: {pokemon.id}</p>
        <p>Name: {getNameByLanguage()}</p>
        <p>Type: {pokemon.type.join(', ')}</p>
        <p>HP: {pokemon.base.HP}</p>
        <p>Attack: {pokemon.base.Attack}</p>
        <p>Defense: {pokemon.base.Defense}</p>
      </div>
    </div>
  );
}

export default Pokemon;
