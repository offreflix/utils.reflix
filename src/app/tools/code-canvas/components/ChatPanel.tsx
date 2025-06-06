'use client'

import React, { useState } from 'react';

export default function ChatPanel() {
  const [messages, setMessages] = useState<string[]>([
    'Bem-vindo ao Chat!',
    'Digite algo no Canvas...'
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages((prev) => [...prev, input]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-gray-100 p-2 rounded shadow-sm">
            {msg}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
