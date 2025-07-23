
import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSUKl70ynzJArLM9ViVM0fVhDhUWkl-BFV3ajwPdrRfAk-TUsUtSqa8oUZdfzaDyr2cJaLRqpf7EsjO/pub?gid=0&single=true&output=csv";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          complete: (results) => setCampaigns(results.data),
        });
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Campaigns</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {campaigns.map((item, idx) => (
          <a href={item["Campaign Link"]} target="_blank" rel="noopener noreferrer" key={idx} className="border p-4 rounded shadow hover:bg-gray-50">
            <img src={item["Image URL"]} alt={item["Seller Name"]} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="font-semibold">{item["Seller Name"]}</h3>
            <p className="text-sm">{item.Description}</p>
            <p className="text-xs text-gray-500">Commission: {item.Commission}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
