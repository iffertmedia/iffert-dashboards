
import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT0zM_qeXH3ssVCEAF33ptOG3KYKm23-kokq19Ej7m9hEGKz6vpNd0Q-49hAgzAZ5BYCAzJf4wWeVm9/pub?gid=0&single=true&output=csv";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          complete: (results) => setProducts(results.data),
        });
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((item, idx) => (
          <a href={item["Product Link"]} target="_blank" rel="noopener noreferrer" key={idx} className="border p-4 rounded shadow hover:bg-gray-50">
            <img src={item["Image URL"]} alt={item["Product Name"]} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="font-semibold">{item["Product Name"]}</h3>
            <p className="text-sm">Rating: {item.Rating}</p>
            <p className="text-xs text-gray-500">Commission: {item.Commission}</p>
            {item.Tag && <span className="text-xs bg-yellow-200 px-2 py-1 rounded">{item.Tag}</span>}
          </a>
        ))}
      </div>
    </div>
  );
}
