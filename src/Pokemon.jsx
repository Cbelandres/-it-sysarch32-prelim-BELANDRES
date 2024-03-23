// Pokemon.jsx
import React from 'react';

function Pokemon({ pokemon, language }) {
  const { id, name, image } = pokemon;
  return (
    <div className="pokemon">
      <img src={image} alt={name.english} />
      <p>ID: {id}</p>
      <p>Name: {name[language]}</p>
    </div>
  );
}

export default Pokemon;
