import React, { useState } from 'react';

function AddGameForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ title, releaseYear });
    setTitle('');
    setReleaseYear('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Release Year:
        <input
          type="text"
          value={releaseYear}
          onChange={e => setReleaseYear(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Game</button>
    </form>
  );
}

export default AddGameForm;
