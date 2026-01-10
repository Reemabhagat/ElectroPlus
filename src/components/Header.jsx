import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';
import { LuCircleUser } from 'react-icons/lu';
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../auth/useAuth";
import Modal from "../components/Modal";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState();
  const { user, handleLogout } = useAuth();


  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMsg, setModalMsg] = useState("");
  const [logoutConfirm, setLogoutConfirm] = useState(false);

  const { logout } = useAuth();

  const productSearch = () => {
    if (query.trim() === "") {
      alert("Please enter a product name!");
      return;
    }
    console.log("Searching for:", query);
    // filter function lag sakta hai
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") productSearch();
  };

  const handleLogoutClick = () => {
  setModalTitle("Confirm Logout");
  setModalMsg("Are you sure you want to log out?");
  setLogoutConfirm(true);
  setModalOpen(true);
};

const closeModal = () => {
  setModalOpen(false);

  // Agar yeh logout confirm modal tha
  if (logoutConfirm && modalTitle === "Confirm Logout") {
    logout(); // actual logout
    setLogoutConfirm(false);

    // Show success modal
    setTimeout(() => {
      setModalTitle("Logout Successful");
      setModalMsg("You have been logged out successfully.");
      setModalOpen(true);
    }, 200);
  }

  // Agar success modal close hua, tab redirect
  if (modalTitle === "Logout Successful") {
    navigate("/login");
  }
};




  return (
    <header className={"py-3 sticky top-0 z-50 bg-white"}>


      {/* Logout modal */}
      <Modal open={modalOpen} onClose={closeModal} title={modalTitle} message={modalMsg} />


      {/* navigation */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}

        <Link to="/">
          <img src="./src/assets/elec.png" alt="ElectroPlus" className="w-20 h-20" />
        </Link>


        {/* Product Search Box
        <div className=" items-center border border-gray-300 rounded-full w-64 overflow-hidden hidden md:flex">
          <input
            type="text"
            placeholder="Search products..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown}
            className="flex-grow outline-none px-3 py-2 "
          />
          <Link to="/"
            className="px-4 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300" onClick={productSearch}
          >
            <FaSearch className="" />
          </Link>
        </div> */}


        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8  font-medium">
          <Link to="/" className="text-black opacity-50 hover:opacity-100 transition-opacity duration-300 relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full 
            after:h-0.5 after:bg-yellow-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            Home
          </Link>
          <Link to="/Products" className="text-black opacity-50 hover:opacity-100 transition-opacity duration-300 relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full 
            after:h-0.5 after:bg-yellow-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            Products
          </Link>
          {/* <Link to="/cart" className="text-black opacity-50 hover:opacity-100 transition-opacity duration-300 relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full 
            after:h-0.5 after:bg-yellow-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            Cart
          </Link> */}
          <Link to="/about" className="text-black opacity-50 hover:opacity-100 transition-opacity duration-300 relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full 
            after:h-0.5 after:bg-yellow-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            About
          </Link>

          <div className="wishlist flex items-center space-x-4 font-large">

            {/* wishlist/cart/userlogin */}
            <Link to="/about" className="text-black opacity-50 hover:opacity-100 transition-opacity duration-300">
              <FaRegHeart className="text-lg" />
            </Link>
            <Link to="/cart" className="text-black opacity-50 hover:opacity-100 transition-opacity duration-300">
              <LuShoppingCart className="text-lg" />
            </Link>

            {/* LOGIN / LOGOUT BUTTON */}
            {user ? (
              <button
                onClick={handleLogoutClick}
                className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/Login"
                className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
              >
                Login
              </Link>
            )}

          </div>
        </nav>

        {/* Mobile Button */}
        <Link
          to="#"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 focus:outline-none transition-all duration-700 ease-in-out transform"
        >
          {menuOpen ? (
            <FaTimes className="text-3xl transition-transform duration-700 ease-in-out rotate-180" />
          ) : (
            <FaBars className="text-3xl transition-transform duration-700 ease-in-out rotate-0" />
          )}
        </Link>

      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden bg-blue-800 text-white overflow-hidden transition-all duration-700 ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/products" className="hover:text-yellow-300">
            Products
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/cart" className="hover:text-yellow-300">
            Cart
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className="hover:text-yellow-300">
            About
          </Link>

          {/* LOGIN / LOGOUT BUTTON */}
          {user ? (
            <button
              onClick={handleLogoutClick}
              className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/Login"
              onClick={() => setMenuOpen(false)}
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
            >
              Login
            </Link>
          )}
        </nav>
      </div>

    </header>
  );
}

export default Header;