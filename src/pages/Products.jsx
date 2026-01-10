import React, { useEffect, useState, useContext } from "react";
import { db } from "../firebase.js";
import { FaHeart } from "react-icons/fa";
import PageBanner from "../components/PageBanner";
import ProductBanner from "../assets/product_banner.jpg";
import { collection, doc, getDocs } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; //bottom bar rightside on add to cart click



const Products = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Laptops");
  const [showBar, setShowBar] = useState(false);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const filtered = products.filter(
    (p) => p.category === activeCategory
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const snap = await getDocs(collection(db, "products"));
      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {/* Banner*/}
      <PageBanner
        image={ProductBanner}
        title="Our Products"
        subtitle="Innovation that fits your lifestyle"
        position="222px -132px"
      />


      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">

        {/* LEFT CATEGORIES */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {["Laptops", "Desktop", "Smartphones", "LED TV"].map(c => (
              <li key={c}
                onClick={() => setActiveCategory(c)}
                className={`p-2 border rounded cursor-pointer 
                ${activeCategory === c ? "bg-black text-white" : ""}`}>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT PRODUCTS */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">{activeCategory}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
                key={p.id} className="relative border p-4 rounded-xl bg-white">

                {/* Discount Badge */}
                <span className="absolute top-3 left-1 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {p.discount || "10% OFF"}
                </span>

                {/* Wishlist Heart */}
                <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl transition-all duration-300 cursor-pointer">
                  <FaHeart />
                </button>

                {/* Product Image */}
                <div className="flex justify-center overflow-hidden group">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-40 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Name + Price */}
                <h3 className="text-lg font-bold mt-3 text-gray-800 text-center">{p.name}</h3>
                <p className="text-black font-bold mt-1 text-center">Rs {p.price}</p>

                {/* Add to Cart Button */}
                {/* bottom bar */}
                {showBar && (
                  <div className="fixed bottom-6 right-6 z-50">
                    <div className="bg-black text-white px-4 py-3 rounded-xl shadow-lg
      flex items-center gap-4 animate-slideUp">

                      {/* LEFT TEXT */}
                      <span className="text-sm font-medium">
                        Item added to cart
                      </span>

                      {/* RIGHT BUTTON */}
                      <button
                        onClick={() => navigate("/cart")}
                        className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-semibold
        hover:bg-gray-200 transition cursor-pointer" >
                        Go to Cart
                      </button>

                    </div>
                  </div>
                )}

 <button onClick={() => navigate(`/product/${p.id}`)}
                  className="w-full bg-black text-white py-2 rounded-md mt-3
    hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer
    transition-all duration-500">
                  More Details
                </button>


                <button
                  onClick={() => {
                    addToCart(p);
                    setShowBar(true);

                    setTimeout(() => {
                      setShowBar(false);
                    }, 5000);
                  }}
                  className="w-full bg-black text-white py-2 rounded-md mt-3
    hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer
    transition-all duration-500">
                  Add to Cart
                </button>

              </div>
            ))}
          </div>
        </div>


      </div >
    </>
  );
}
export default Products;
