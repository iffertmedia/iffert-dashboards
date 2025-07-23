export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-2">Welcome to Iffert Media</h2>
      <p className="mb-6">Helping TikTok Shop creators discover high-commission campaigns and request samples.</p>

      <h3 className="text-xl font-bold mb-2">Featured Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="border rounded-lg p-4 shadow">Product 1</div>
        <div className="border rounded-lg p-4 shadow">Product 2</div>
        <div className="border rounded-lg p-4 shadow">Product 3</div>
      </div>

      <h3 className="text-xl font-bold mb-2">Top Creators</h3>
      <div className="flex overflow-x-auto space-x-4 justify-center">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">Creator 1</div>
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">Creator 2</div>
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">Creator 3</div>
      </div>
    </div>
  );
}
