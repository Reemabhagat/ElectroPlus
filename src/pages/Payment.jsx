import React, { useContext,useEffect } from "react";
import { CartContext } from "../context/CartContext";
import PageBanner from "../components/PageBanner";
import PaymentBanner from "../assets/banners/cart3.jpg";
import { useNavigate } from "react-router-dom";



const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Payment = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );


  
  // Razorpay Checkout
  const handlePayment = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

     const loaded = await loadRazorpayScript();
      if (!loaded) {
    alert("Razorpay SDK failed to load. Check internet.");
    return;
  }
    const options = {
      key: "rzp_test_S1PHvcE85HsOEG", // Razorpay test key
      amount: totalPrice * 100, // in paise
      currency: "INR",
      name: "ElectroPlus",
      description: "Test Transaction",
      handler: function (response) {
        // Payment success
        console.log("Payment Successful! ", response);
        alert("Payment Successful");
        setCart([]);
      navigate("/");
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#000000",
      },
       config: {
    display: {
      hide: [
        { method: "international" } // 🚫 international cards hidden
      ]
    }
  }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <PageBanner
        image={PaymentBanner}
        title="Payment"
        subtitle="Complete your purchase securely"
        position="0px 500px" className="pointer-events-none"
      />

      <div className="max-w-4xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT - ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} × {item.qty}</span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <button onClick= {handlePayment} 
            className="w-full mt-5 bg-black text-white py-3 rounded-lg hover:bg-white 
            hover:text-black hover:border hover:border-black transition-all cursor-pointer"
          >
            Pay Now
          </button>
        </div>

        {/* RIGHT - OPTIONAL INFO */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Note</h2>
          <p className="text-gray-700">
            Use Razorpay Test Card for practice:  
            <br />Card: 4111 1111 1111 1111  
            <br />CVV: 123  
            <br />Expiry: Any future date
          </p>
        </div>

      </div>
    </>
  );
};

export default Payment;
