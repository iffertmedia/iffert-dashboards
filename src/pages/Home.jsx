// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="text-center space-y-4 mt-8">
      <h2 className="text-2xl font-semibold">Welcome to Iffert Media</h2>
      <p className="text-lg">Helping TikTok Shop creators discover high-commission campaigns and request samples.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="border p-4 rounded shadow">🌟 Creator A</div>
        <div className="border p-4 rounded shadow">🌟 Creator B</div>
        <div className="border p-4 rounded shadow">🌟 Creator C</div>
      </div>
    </div>
  );
}
