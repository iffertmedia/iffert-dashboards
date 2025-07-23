import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vT0zM_qeXH3ssVCEAF33ptOG3KYKm23-kokq19Ej7m9hEGKz6vpNd0Q-49hAgzAZ5BYCAzJf4wWeVm9/pub?gid=0&single=true&output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setProducts(results.data);
      }
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-4 border rounded shadow hover:shadow-md transition">
            <img src={product["Image"]} alt={product["Name"]} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="text-lg font-bold mb-1">{product["Name"]}</h3>
            <p className="text-sm text-gray-700 mb-2">{product["Details"]}</p>
            <a href={product["TAP Link"]} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Open in TikTok Shop
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
