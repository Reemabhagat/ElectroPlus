import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PageBanner from "../components/PageBanner";
import PaymentBanner from "../assets/banners/cart3.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { makeDummyPayment } from "../api/dummyApi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const Payment = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handlePayment = async () => {
    const res = await makeDummyPayment(cart, totalPrice);
    alert(`Payment Successful 🎉\nOrder ID: ${res.orderId}`);
    setCart([]);
    navigate("/");
  };

  return (
    <>
      <PageBanner
        image={PaymentBanner}
        title="Payment"
        subtitle="Complete your order"
        position="0px 500px"
      />

      <div className="max-w-4xl mx-auto py-16 px-4">

        {/* STEP INDICATOR */}
        <div className="flex justify-between items-center mb-10 text-sm font-semibold">
          <div className="flex items-center gap-2 text-green-600">
            <IoCheckmarkDoneCircleSharp size={40}/>
                Cart
          </div>

          <div className="flex-1 h-1 bg-green-600 mx-2"></div>

          <div className="flex items-center gap-2 text-green-600 ">       
            <IoCheckmarkDoneCircleSharp size={40}/>
            Checkout
          </div>

          <div className="flex-1 h-1 bg-gray-300 mx-2"></div>

          <div className="flex items-center gap-2 text-black">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">3</span>
            Payment
          </div>
        </div>

        {/* PAYMENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6" >
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-2 max-h-48 overflow-y-auto text-sm">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} × {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total Amount</span>
            <span className="text-green-600">₹{totalPrice}</span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-6 bg-black text-white py-3 rounded-xl text-lg font-semibold hover:scale-[1.02]
             transition cursor-pointer" >
            Pay
          </button>

          <p className="text-xs text-center text-gray-400 mt-4">
            Secure demo payment  No real transaction
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Payment;
