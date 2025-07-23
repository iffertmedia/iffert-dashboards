// src/pages/Campaigns.jsx
import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSUKl70ynzJArLM9ViVM0fVhDhUWkl-BFV3ajwPdrRfAk-TUsUtSqa8oUZdfzaDyr2cJaLRqpf7EsjO/pub?gid=0&single=true&output=csv';

export default function Campaigns() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => setData(results.data),
        });
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Live Campaigns</h2>
      {data.length === 0 ? (
        <p>Loading campaigns...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key} className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  {Object.values(row).map((val, i) => (
                    <td key={i} className="border border-gray-300 px-3 py-2 text-sm">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
