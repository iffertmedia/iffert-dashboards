
export default function Creators() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Creator Showcase</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="text-center">
          <img src="https://via.placeholder.com/100" alt="Creator" className="rounded-full mx-auto mb-2" />
          <p>@creator1</p>
        </div>
        <div className="text-center">
          <img src="https://via.placeholder.com/100" alt="Creator" className="rounded-full mx-auto mb-2" />
          <p>@creator2</p>
        </div>
      </div>
    </div>
  );
}
