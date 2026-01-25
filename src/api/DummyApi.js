export const makeDummyPayment = (cartItems, totalAmount, billingDetails) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true; // test always success for now
      if (isSuccess) {
        resolve({ status: "success", orderId: "DUMMY12345" });
      } else {
        reject({ status: "failed", message: "Payment failed" });
      }
    }, 1000); // 1 sec delay
  });
};
