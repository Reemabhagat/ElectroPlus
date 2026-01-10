import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import loginRight from "../assets/login-right.png";
import Modal from "../components/Modal";


export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const closeModal = () => {
    setModalOpen(false);

    if (modalTitle === "Success") {
      navigate("/");
    }
  };


  const sendOtp = () => {
    setError("");

    // VALIDATION
    if (!phone) {
      setError("Please enter your phone number.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    const dummyNumber = "1234567890";

    if (phone !== dummyNumber) {
      setError("Only dummy number allowed for testing.");
      return;
    }

    // SUCCESS
    setStep(2);

    setModalTitle("OTP Sent");
    setModalMsg("OTP sent! Use 123456 for testing.");
    setModalOpen(true);

  };

  const verifyOtp = () => {
    setError("");

    // OTP VALIDATION
    if (!otp) {
      setError("Please enter OTP.");
      return;
    }

    if (!/^[0-9]{6}$/.test(otp)) {
      setError("OTP must be 6 digits.");
      return;
    }

    if (otp !== "123456") {
      setError("Invalid OTP!");
      return;
    }

    // SUCCESS LOGIN
    login({
      id: phone,
      phone,
    });

    setModalTitle("Success");
    setModalMsg("Login successful!");
    setModalOpen(true);


  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-poppins">

      {/* popup-model */}
      <Modal
        open={modalOpen}
        onClose={closeModal}
        title={modalTitle}
        message={modalMsg}
      />

      {/* LEFT SECTION */}
      <div className="md:col-span-2 flex items-center justify-center p-6 ">
        <div className="w-full max-w-lg shadow-xl rounded-2xl p-8 ">
          <p className="mb-6 text-gray-500">Welcome back !!!</p>
          <h2 className="text-5xl font-semibold mb-6">Sign in</h2>



          {step === 1 ? (
            <div>
              <label className="block mb-3 text-gray-500">Contact Number</label>

              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="w-full p-3 rounded-xl mb-8 login-right 
                focus:outline-none focus:ring-2 focus:ring-[#F47458]"
              />

              {error && (
                <p className="text-red-500 mb-4 text-sm font-medium">{error}</p>
              )}

              <button
                onClick={sendOtp}
                className="w-full py-3 rounded-xl bg-[#F47458] text-white font-bold cursor-pointer"
              >
                Send OTP
              </button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full p-3 rounded-xl mb-8 login-right 
                focus:outline-none focus:ring-2 focus:ring-[#F47458]"
              />

              <button
                onClick={verifyOtp}
                className="w-full py-3 rounded-xl bg-[#F47458] text-white font-bold cursor-pointer"
              >
                Verify OTP
              </button>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block md:col-span-1">
        <img
          src={loginRight}
          alt="Login"
          className="w-full h-full object-cover rounded-l-2xl login-right"
        />
      </div>
    </div>
  );
}
