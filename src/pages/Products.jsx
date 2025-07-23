
export default function Products() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Featured Products</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="border p-4 rounded shadow">
          <img src="https://via.placeholder.com/150" alt="Product 1" className="mb-2" />
          <p className="font-semibold">Product Name</p>
          <p>⭐ 4.8 | Shop Rating 97%</p>
          <a href="#" className="text-blue-500 underline">Get Commission</a>
        </div>
        <div className="border p-4 rounded shadow">
          <img src="https://via.placeholder.com/150" alt="Product 2" className="mb-2" />
          <p className="font-semibold">Another Product</p>
          <p>⭐ 4.9 | Shop Rating 95%</p>
          <a href="#" className="text-blue-500 underline">Request Sample</a>
        </div>
      </div>
    </div>
  );
}
