export default function Campaigns() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Partner Campaigns</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="border rounded p-4 shadow">
            <h3 className="text-lg font-semibold">Seller {i}</h3>
            <p className="text-sm text-gray-600">High commission campaign with samples available.</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">View Campaign</button>
          </div>
        ))}
      </div>
    </div>
  );
}
