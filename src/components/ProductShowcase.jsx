import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { FaHeart } from "react-icons/fa";


function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("newarrival");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabs = [
    { key: "newarrival", label: "New Arrival" },
    { key: "bestseller", label: "Best Seller" },
    { key: "bestproduct", label: "Best Product" }
  ];

  
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const q = query(
        collection(db, "product_showcase"),
        where("tag", "==", activeTab)
      );

      const querySnapshot = await getDocs(q);

      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });

      setProducts(items);
      setLoading(false);
    };

    fetchProducts();
  }, [activeTab]);

  return (
    <div className="max-w-7xl mx-auto my-10 px-6">

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b pb-3">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`text-lg font-medium pb-2 cursor-pointer
              ${activeTab === tab.key
                ? "text-black border-b-2 border-black font-semibold"
                : "text-gray-500"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      {loading ? (
        <p className="text-center mt-8">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {products.map(product => (
            <div
              key={product.id}
              className="relative bg-gray-100 p-5 rounded-lg hover:shadow-lg hover:-translate-y-1 duration-500"
            >
              <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500 duration-200">
                <FaHeart />
              </button>

              <div className="flex justify-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-28 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold mt-3 text-center">
                {product.name}
              </h3>

              <p className="text-black font-bold text-center mt-1">{product.price}</p>

              <div className="flex justify-center mt-3">
                <a className="text-white bg-black font-medium text-base rounded-sm px-7 py-2" href="#">
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductShowcase;
