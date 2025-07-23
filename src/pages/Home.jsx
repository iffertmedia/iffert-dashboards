export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h2 className="text-3xl font-bold">Welcome to Iffert Media</h2>
        <p className="text-lg mt-2">Helping TikTok Shop creators discover high-commission campaigns and request samples.</p>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-4">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="border rounded-lg p-4 shadow">
              <div className="h-40 bg-gray-200 mb-2 rounded"></div>
              <h4 className="font-bold text-lg">Product {i}</h4>
              <p className="text-sm text-gray-600">Commission: 20% | ⭐ 4.5</p>
              <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded">Get Link</button>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-4">Meet Our Creators</h3>
        <div className="flex overflow-x-auto gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="w-40 flex-shrink-0 text-center">
              <div className="h-40 w-40 bg-gray-300 rounded-full mb-2"></div>
              <p>Creator {i}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
