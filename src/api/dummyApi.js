export const makeDummyPayment = (cartItems, totalAmount, billingDetails) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true; 
      if (isSuccess) {
        resolve({ status: "success", orderId: "DUMMY12345" });
      } else {
        reject({ status: "failed", message: "Payment failed" });
      }
    }, 1000); 
  });
};
