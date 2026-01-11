import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/elec.png';
import AppStore from '../assets/1.png';
import GooglePlay from '../assets/2.png';
import WindowsStore from '../assets/3.png';



function Footer() {
    return (
        <>
            {/* 🔹 Main Footer */}
            <footer className="w-full flex flex-col justify-between items-center py-10 bg-footer text-black">
                {/* Content container (same width as header) */}
                <div className="w-full max-w-7xl mx-auto px-6">
                    {/* First Row - 4 Columns */}
                    <div className="flex flex-col lg:flex-row justify-between gap-8">
                        {/* storeinformation */}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-3 uppercase font-poppins ">Store Information</h3>
                            <div className="">
                                <ul className="list-none space-y-2">
                                    <li className="flex items-center">
                                        <FaMapMarkerAlt className="text-green-500 mr-2" />
                                        <a
                                            href="https://www.google.com/maps/place/electroplus+India"
                                            target="_blank"
                                            rel=""
                                            className="hover:underline"
                                        >ElectroPlus, India
                                        </a>
                                    </li>
                                    <li className="flex items-center">
                                        <FaPhoneAlt className="text-green-500 mr-2" />
                                        <a href="tel:(555) 888 8888" className="hover:underline">
                                            (555) 888 8888
                                        </a>

                                    </li>
                                    <li className="flex items-center">
                                        < FaEnvelope className="text-green-500 mr-2" />
                                        <a href="mailto:info@electroplus.com" className="hover:underline">
                                            info@electroplus.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* our-company */}

                        <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-3 uppercase font-poppins ">Our Company</h3>
                            <ul className="space-y-2">
                                <li>Terms & Condition</li>
                                <li>About Us</li>
                                <li>Contact Us</li>

                            </ul>
                        </div>

                        {/* products*/}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-3 uppercase font-poppins ">Products</h3>
                            <ul className="space-y-2">
                                <li>Price Drop</li>
                                <li>Best Sales</li>
                                <li>Latest Product</li>
                            </ul>
                        </div>
                        {/* opening hours */}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-3 uppercase font-poppins ">Opening Hours</h3>
                            <p>Monday - Saturday: 9:00 AM - 10:00 PM</p>
                            <p>Sunday - Closed</p>
                        </div>
                    </div>

                    {/* playstore */}
                    <div className="mt-15 mb-10 flex justify-center">
                        {/* logo */}
                        <Link to="/">
                            <img src={Logo} alt="ElectroPlus" className="w-20 h-20" />
                        </Link>

                    </div>

                    {/* Social Info */}
                    <div className="my-6 flex justify-center gap-4">

                        <Link to="/">
                            <img src={AppStore} alt="Appstore" className="" />
                        </Link>
                        <Link to="/">
                            <img src={GooglePlay} alt="googleplay" className="" />
                        </Link>
                        <Link to="/">
                            <img src={WindowsStore} alt="windowsstore" className="" />
                        </Link>


                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <div className="w-full copyright">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-center text-base text-white py-3">
                    <p>Copyright © {new Date().getFullYear()} - ElectroPlus by RD</p>

                    <div className="atm-cards flex gap-2">
                        <Link to="/">
                            <img src="./src/assets/visa.png" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="./src/assets/mastercard.png" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="./src/assets/amex.png" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="./src/assets/Discover-icon.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Footer;
