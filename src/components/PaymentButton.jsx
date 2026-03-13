import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { makeDummyPayment } from "../api/dummyApi";
import { useNavigate } from "react-router-dom";


const PaymentButton = ({ cartItems }) => {
    const [loading, setLoading] = useState(false);
const navigate = useNavigate();

    const { clearCart } = useContext(CartContext);

    const handlePayment = async () => {
        const totalAmount = (cartItems || []).reduce((sum, item) => sum + item.price * item.qty, 0);
        setLoading(true);
        try {
            const res = await makeDummyPayment(cartItems, totalAmount);
            alert(`Payment Successful! Order ID: ${res.orderId}`);

            clearCart();
navigate("/"); 
        } catch (err) {
            alert(`Payment Failed: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };


    return (
        <button onClick={handlePayment} disabled={loading || !(cartItems?.length)}
            className="w-full mt-6 bg-black text-white py-3 rounded-xl text-lg font-semibold 
        transition cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black 
         duration-1000 ease-in-out">
            {loading ? "Processing..." : "Pay Now"}

        </button>

    );

};
export default PaymentButton;