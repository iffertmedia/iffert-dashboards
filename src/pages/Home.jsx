export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Welcome to Iffert Media</h2>
      <p className="mb-6">Helping TikTok Shop creators discover high-commission campaigns and request samples.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded shadow">🔥 Featured Product 1</div>
        <div className="p-4 border rounded shadow">🔥 Featured Product 2</div>
        <div className="p-4 border rounded shadow">🔥 Featured Product 3</div>
      </div>
    </div>
  );
}