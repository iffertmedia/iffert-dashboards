export default function Creators() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Creator Showcase</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="text-center">
            <div className="h-32 w-32 mx-auto bg-gray-300 rounded-full mb-2"></div>
            <p className="font-semibold">Creator {i}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
