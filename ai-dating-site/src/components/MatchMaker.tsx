// src/components/MatchMaker.tsx
import React from 'react';

const MatchMaker = () => {
  const matches = [
    { id: 1, name: 'Ava Bot', status: 'Available', image: 'https://via.placeholder.com/150', inviteUrl: 'https://invite.ai/ava' },
    { id: 2, name: 'Luna AI', status: 'In Chat', image: 'https://via.placeholder.com/150', inviteUrl: 'https://invite.ai/luna' },
    { id: 3, name: 'Alexa AI', status: 'In Chat', image: 'https://via.placeholder.com/150', inviteUrl: 'https://invite.ai/Alexa' },
    { id: 4, name: 'Tim AI', status: 'In Chat', image: 'https://via.placeholder.com/150', inviteUrl: 'https://invite.ai/Tim' },
    { id: 5, name: 'Carolin AI', status: 'In Chat', image: 'https://via.placeholder.com/150', inviteUrl: 'https://invite.ai/Carolin' },
    { id: 6, name: 'Cypher AI', status: 'In Chat', image: 'https://via.placeholder.com/150', inviteUrl: 'https://invite.ai/Cypher' },
  ];

  return (
    <div className="bg-cyberpunk-bg p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {matches.map(user => (
        <div key={user.id} className="bg-white rounded shadow p-4">
          <img src={user.image} alt={user.name} className="rounded w-full h-40 object-cover mb-4" />
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-gray-600">Status: {user.status}</p>
          <a href={user.inviteUrl} target="_blank" rel="noopener noreferrer">
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Invite
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default MatchMaker;
