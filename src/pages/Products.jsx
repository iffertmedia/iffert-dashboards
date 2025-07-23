export default function Products() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">High-Commission Products</h2>
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="border p-4 rounded shadow">
            <div className="h-32 bg-gray-200 mb-2 rounded"></div>
            <h3 className="text-lg font-semibold">Product {i}</h3>
            <p className="text-sm text-gray-600">Top product in Health category | ⭐ 4.7</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">Add to Showcase</button>
          </div>
        ))}
      </div>
    </div>
  );
}
