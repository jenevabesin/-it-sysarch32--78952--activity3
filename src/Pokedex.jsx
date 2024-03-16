import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [language, setLanguage] = useState('english');
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon data');
        }
        return response.json();
      })
      .then(data => setPokemonList(data))
      .catch(error => setError(error.message));
  }, []);

  const handleLanguageChange = selectedLanguage => {
    setLanguage(selectedLanguage);
  };

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div>
      <h1>Pokedex</h1>
      <div className='button-container'>
        <button onClick={() => handleLanguageChange('english')}>English</button>
        <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
        <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
        <button onClick={() => handleLanguageChange('french')}>French</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemonList.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
