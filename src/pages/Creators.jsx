import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function Creators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTMPBKqeX6IjK7O4u6vIsJTAr9KGg_2iPIptbTelthvWheYB6tlOV3NRnpY7R7ZX93aO6WFVP-V4b4B/pub?gid=982626732&single=true&output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setCreators(results.data);
      }
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Creator Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {creators.map((creator, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <img src={creator["Image"]} alt={creator["Name"]} className="w-full h-48 object-cover rounded mb-3" />
            <h3 className="text-lg font-bold">{creator["Name"]}</h3>
            <p className="text-sm text-gray-600 mb-1">@{creator["Handle"]}</p>
            <p className="text-sm text-gray-600 mb-1">Niche: {creator["Niche"]}</p>
            <p className="text-sm text-gray-600 mb-1">Avg Views: {creator["Average Views"]}</p>
            <a href={creator["TikTok Link"]} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              View TikTok
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
