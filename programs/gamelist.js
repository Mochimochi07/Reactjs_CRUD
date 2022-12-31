import React, { useState, useEffect } from 'react';

function GameList({ onDelete }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('megaMan.json')
      .then(response => response.json())
      .then(data => setGames(data.games));
  }, []);

  return (
    <ul>
      {games.map(game => (
        <li key={game.id}>
          {game.title} ({game.releaseYear})
          <button onClick={() => onDelete(game.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default GameList;
