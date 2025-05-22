import React, { useState } from 'react';
import { mockPets } from '../../data/mockData';

const SearchModal = ({ open, onClose }) => {
  const [query, setQuery] = useState('');
  const results = mockPets.filter(pet =>
    pet.name.toLowerCase().includes(query.toLowerCase()) ||
    pet.description.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button className="absolute top-2 right-2" onClick={onClose}>Kapat</button>
        <h2 className="text-xl font-bold mb-4">Hayvan Ara</h2>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
          placeholder="Arama..."
        />
        <ul>
          {results.map(pet => (
            <li key={pet.id} className="mb-2">{pet.name} - {pet.species}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchModal;