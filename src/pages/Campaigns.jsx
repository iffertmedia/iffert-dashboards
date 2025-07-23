
export default function Campaigns() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Affiliate Campaigns</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold">Seller A</h3>
          <p>High commission products available.</p>
          <a href="#" className="text-blue-500 underline">View Campaign</a>
        </div>
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold">Seller B</h3>
          <p>Request samples directly from our partner.</p>
          <a href="#" className="text-blue-500 underline">View Campaign</a>
        </div>
      </div>
    </div>
  );
}
