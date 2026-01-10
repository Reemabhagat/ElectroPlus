import React, { useContext } from "react";
import PageBanner from "../components/PageBanner";
import ProductBannerCart from "../assets/banners/cart3.jpg";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cart, setCart } = useContext(CartContext);
 const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Banner */}
      <PageBanner
        image={ProductBannerCart}
        title="Cart"
        subtitle="Ready to place your order?"
        position="0px 500px"
      />

      {/* CART */}
      <div className="bg-cart pt-20 pb-20">
        <div className="max-w-7xl mx-auto p-4">

          {/* EMPTY CART */}
          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-gray-700 text-lg font-bold flex items-center justify-center gap-5"
            >
              Your cart is empty <FiShoppingCart />
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* ITEMS */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="md:col-span-2 bg-white p-6 rounded-xl shadow-xl"
              >
                <h2 className="text-xl font-semibold mb-4">Shopping Bag</h2>

                <div className="hidden md:grid grid-cols-4 font-semibold border-b pb-3 text-gray-700">
                  <div>Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Total Price</div>
                </div>

                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid md:grid-cols-4 grid-cols-1 gap-4 items-center border-b py-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 rounded"
                      />
                      <h3 className="font-semibold">{item.name}</h3>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-sm md:hidden"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="text-gray-700 font-medium md:text-left text-right">
                      ₹{item.price}
                    </div>

                    <div className="flex items-center gap-3">
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                      >
                        -
                      </motion.button>

                      <span className="font-semibold">{item.qty}</span>

                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        onClick={() => increaseQty(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                      >
                        +
                      </motion.button>
                    </div>

                    <div className="text-gray-900 font-semibold">
                      ₹{item.price * item.qty}

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 ml-4 hidden md:inline-block cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* SUMMARY */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-6 rounded-xl shadow h-fit"
              >
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="flex justify-between mb-3">
                  <span>Subtotal:</span>
                  <span>Rs {totalPrice}</span>
                </div>

                <motion.button onClick={() => navigate("/Checkout")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-5 bg-black text-white py-3 rounded-lg cursor-pointer"

                >
                  Proceed to Checkout
                </motion.button>
              </motion.div>

            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
