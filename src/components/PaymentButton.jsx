import React, { useState } from "react";
import { makeDummyPayment } from "../api/dummyApi";

const PaymentButton = ({ cartItems }) => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
        setLoading(true);
        try {
            const res = await makeDummyPayment(cartItems, totalAmount);
            alert(`Payment Successful! Order ID: ${res.orderId}`);
            localStorage.removeItem("cart"); // clear cart
        } catch (err) {
            alert(`Payment Failed: ${err.message}`);
        } finally { 
            setLoading(false);
        }
    };


    return (
        <button onClick={handlePayment} disabled={loading || cartItems.length === 0}>
            {loading ? "Processing..." : "Pay Now"}

        </button>

    );

};
export default PaymentButton;