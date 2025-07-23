
import React from 'react';

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Welcome to Iffert Media</h2>
      <p className="mb-6">Helping TikTok Shop creators discover high-commission campaigns and request samples.</p>
      <div className="flex justify-center space-x-4 overflow-x-auto py-4">
        <img src="https://via.placeholder.com/100x100.png?text=Creator+1" alt="Creator 1" className="rounded-full w-24 h-24" />
        <img src="https://via.placeholder.com/100x100.png?text=Creator+2" alt="Creator 2" className="rounded-full w-24 h-24" />
        <img src="https://via.placeholder.com/100x100.png?text=Creator+3" alt="Creator 3" className="rounded-full w-24 h-24" />
      </div>
    </div>
  );
}
