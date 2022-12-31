import React, { useState } from 'react';
import GameList from './GameList';
import AddGameForm from './AddGameForm';

function App() {
  const [games, setGames] = useState([]);

  const addGame = game => {
    setGames([...games, game]);
  };

  const deleteGame = id => {
    setGames(games.filter(game => game.id !== id));
  };

  return (
    <div>
      <h1>Mega Man Games</h1>
      <GameList games={games} onDelete={deleteGame} />
      <AddGameForm onAdd={addGame} />
    </div>
  );
}

export default App;
