import React, { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

import PageBanner from "../components/PageBanner";
import ProductDetailBanner from "../assets/product_banner_2.jpg";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProduct = async () => {
            const ref = doc(db, "products", id);
            const snap = await getDoc(ref);

            if (snap.exists()) {
                setProduct(snap.data());
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <>
            {/* Banner*/}
            <PageBanner
                image={ProductDetailBanner}
                title="Product Detail"
                subtitle="Find the best electronics at unbeatable prices"
                position="85px -132px"
            />
            {/* cart */}
         <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">

  {/* LEFT SIDE – PRODUCT IMAGES */}
  <div className="flex gap-4">

    {/* Thumbnails (optional – agar multiple images) */}
    <div className="flex flex-col gap-3">
      {(product?.images || [product?.img]).map((img, index) => (
        <img
          key={index}
          src={img}
          className="w-20 h-20 object-contain border rounded-lg cursor-pointer"
          alt="thumb"
        />
      ))}
    </div>

    {/* Main Image */}
    <div className="flex-1 flex items-center justify-center">
      <img
        src={product?.img}
        alt={product?.name}
        className="w-[350px] h-[350px] object-contain rounded-2xl shadow"
      />
    </div>

  </div>

  {/* RIGHT SIDE – PRODUCT DETAILS */}
  <div>
    <h1 className="text-3xl font-semibold mb-3">
      {product?.name}
    </h1>

    <p className="text-gray-600 mb-5 leading-relaxed">
      {product?.description}
    </p>

    <p className="text-2xl font-bold mb-6">
      ₹{product?.price}
    </p>
    <button onClick ={() => navigate("/cart")}
    className="px-6 py-3 bg-black text-white rounded-xl cursor-pointer">
      Add to Cart
    </button>
  </div>

</div>

       
    </>
  );
}

export default ProductDetail;