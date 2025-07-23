import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSUKl70ynzJArLM9ViVM0fVhDhUWkl-BFV3ajwPdrRfAk-TUsUtSqa8oUZdfzaDyr2cJaLRqpf7EsjO/pub?gid=0&single=true&output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setCampaigns(results.data);
      }
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Campaigns</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map((item, index) => (
          <div key={index} className="p-4 border rounded shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold mb-1">{item["Seller Name"]}</h3>
            <img src={item["Image"]} alt={item["Seller Name"]} className="w-full h-48 object-cover rounded mb-2" />
            <p className="mb-2 text-sm text-gray-700">{item["Short Description"]}</p>
            <a href={item["Campaign Link"]} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              View Campaign
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
