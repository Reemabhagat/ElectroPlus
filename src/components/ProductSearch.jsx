import React, { useState } from "react";
import { collection, query as q, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { FaSearch } from "react-icons/fa";

const ProductSearch = () => {
  const [queryText, setQueryText] = useState("");
  const [results, setResults] = useState([]);

  // Handle search
  const productSearch = async () => {
    if (!queryText.trim()) return;

    try {
      const productsRef = collection(db, "product_showcase");
      const qSearch = q(
        productsRef,
        where("name", ">=", queryText),
        where("name", "<=", queryText + "\uf8ff")
      );

      const querySnapshot = await getDocs(qSearch);
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResults(items);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  // Enter key triggers search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") productSearch();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Search Box */}
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Search products..."
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          onKeyDown={handleKeyDown}
          className=" px-4 py-2 outline-none"
        />
        <button
          onClick={productSearch}
          className="px-4 py-2 hover:bg-gray-100 transition-colors"
        >
          <FaSearch />
        </button>
      </div>

      {/* Results */}
      <div className="mt-4">
        {results.length === 0 ? (
          <p className="text-gray-500">No products found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-2 rounded"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-700">₹{product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
