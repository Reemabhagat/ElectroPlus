import React, { useEffect, useContext, useState } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import PageBanner from "../components/PageBanner";
import ProductBannerCart from "../assets/product_banner_1.jpg";
// import productBanner from "../assets/banners/products.jpg";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (
      !form.name ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      alert("Please fill all details");
      return;
    }

    alert("Order placed successfully 🎉");

    setCart([]);        // clear cart
    navigate("/");      // go home
  };
  
  // validation
  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!form.phone) {
      newErrors.phone = "phone is required"

    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }
    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!form.city.trim()) {
      newErrors.city = "city is required";
    }
    if (!form.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(form.pincode)) {
      newErrors.pincode = "Enter valid 6 digit pincode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
   
          
  };
   // onclickbutton
    const handleProceed= () => {
  if (!validateForm()) return;
          navigate("/Payment", {state: {billingDetails: form } });
};
  return (
    <>
      {/* Banner*/}
      <PageBanner
        image={ProductBannerCart}
        title="Checkout"
        subtitle="Find the best electronics at unbeatable prices"
        position="85px -132px"
      />
      {/* cart */}

      <div className="max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT - FORM */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          {["name", "phone", "address", "city", "pincode"].map((field) => (
            <div key={field}>
              <input
              name={field}
              placeholder={field.toUpperCase()}
              value={form[field]}
              onChange={handleChange}
              className={`w-full border p-3 rounded mb-3 ${
        errors[field] ? "border-red-500" : ""
      }`}
            />
          {errors[field] && (
      <p className="text-red-500 text-sm mb-2">{errors[field]}</p>
    )}
  </div>
))}
</div>
        {/* RIGHT - ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <button onClick={handleProceed} 
          className="w-full mt-5 bg-black text-white py-3 rounded-lg cursor-pointer">
          Proceed to Payment
        </button>
      </div>
    </div >
    </>
  );
};

export default Checkout;







