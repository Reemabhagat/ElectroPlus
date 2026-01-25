import React from "react";
import CategorySlider from "../components/CategorySlider";
import ProductShowcase from "../components/ProductShowcase";

import bannerFooter from "../assets/banner-footer.png"
import HomeBanner from "../assets/banner-phn.png"
import PlayStation from "../assets/playstation.png"
import AirPods from "../assets/airpods.png"
import MacRight from "../assets/macbook-right.png"
import AirVision from "../assets/vision.png"
import { useNavigate } from "react-router-dom";
import BannerFooter from "../components/BannerFooter";


function Home() {
  const navigate = useNavigate();

  return (
    <div className=" ">
      {/* Banner section */}
      <div className="Banner w-full ">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center pt-10 md:pt-0">
          <div className="banner-text text-center md:text-start">
            <p className="text-gray-400 font-semibold text-xl">Pro.Beyond.</p>
            <h1 className="text-gray-400  text-4xl md:text-7xl font-thin py-3">IPhone 14 <span className="text-white font-semibold">Pro </span></h1>
            <p className="text-gray-400 text-base md:text-lg font-medium pb-6">Created to change everything for the better. For everyone</p>
            {/* <a className="text-white font-medium text-base border border-white rounded-sm px-7 py-2" href="/products">Shop Now</a> */}
            <button onClick={() => navigate("/products")}
              className="text-white font-medium text-base border border-white rounded-sm px-7 py-2 
              transition-all duration-900 ease-in-out
             hover:bg-white hover:text-black cursor-pointer" >
              Shop Now
            </button>

          </div>
          {/* banner-iphn */}
          <div className="banner-img flex justify-center md:justify-end">
            <img src={HomeBanner} alt="ElectroPlus" className="h-100 w-80" />
          </div>
        </div>
      </div>

      {/* collage */}
      <div className="collage w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* left-column */}

          <div>
            {/* playstation */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-0">
              <div className="hidden md:block">
                <img src={PlayStation} alt="ElectroPlus" className="" />
              </div>
              <div className="banner-text text-center md:text-start md:py-0 py-10">
                <p className="text-black font-medium text-6xl pb-5">Playstation 5</p>
                <p className="text-gray-400 text-base md:text-lg font-medium pb-5">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.</p>
              </div>
            </div>

            {/* airpods/airvision */}

            <div className="grid grid-cols-2 ">
              {/* left-column md:grid-cols-2 grid-cols-1*/}
              <div className="grid grid-cols-1 md:grid-cols-5 items-center">
                <div className="md:col-span-2">
                  <img src={AirPods} alt="ElectroPlus" className="" />
                </div>
                <div className="text-center md:text-start md:col-span-3 md:pr-2 pr-0 pt-4 md:pt-0">
                  <p className="text-black font-thin text-4xl" >Apple
                    AirPods</p>
                  <p className="text-black font-medium text-4xl pb-5">Max</p>
                  <p className="text-gray-400 text-base font-medium pb-5">Computational audio. Listen, it's powerful</p>
                </div>
              </div>
              {/* right-column */}
              <div className="grid  grid-cols-1 md:grid-cols-5 items-center apple-vision">
                <div className="md:col-span-2">
                  <img src={AirVision} alt="ElectroPlus" className="" />
                </div>
                <div className="text-center md:text-start md:col-span-3 md:pr-2 pr-0">
                  <p className="text-white font-thin text-4xl" >Apple Vision</p>
                  <p className="text-white font-medium text-4xl pb-5">Pro</p>
                  <p className="text-gray-400 text-base font-medium pb-5">An immersive way to experience entertainment</p>
                </div>
              </div>


            </div>

          </div>

          {/* right-column */}
          <div className="macbook-right pl-5 pr-5 md:pr-0 md:pl-10 py-10 grid items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="banner-text text-center md:text-start">
                <p className="text-gray-400 font-thin text-6xl" id="mac-right">Macbook</p>
                <p className="text-black font-medium text-6xl pb-2">Air</p>
                <p className="text-gray-400 text-base md:text-lg font-medium pb-5">The new 15‑inch MacBook Air makes room for more of what you love with a
                  spacious Liquid Retina display.</p>
                {/* <a className="text-black font-medium text-base border border-black rounded-sm px-7 py-2" 
                href="/products">Shop Now</a> */}
                <button
                  onClick={() => navigate("/products")}
                  className="text-black font-medium text-base border border-black 
                  rounded-sm px-7 py-2 transition-all duration-900 ease-in-out
             hover:bg-black hover:text-white cursor-pointer">
                  Shop Now
                </button>


              </div>
              <div className="hidden md:flex  justify-end ">
                <img src={MacRight} alt="ElectroPlus" className="h-80" />
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* category-component */}
      <CategorySlider />
      <ProductShowcase />


      {/* Banner-footer */}

      {/* <div
        className="w-full h-100 bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4 bnr-footer"
        style={{ backgroundImage: `url(${bannerFooter})` }} >
        <h2 className="text-2xl md:text-5xl font-thin mb-3">
          Get the Best Deals on <span className="font-bold"> Electronics!   </span>
        </h2>
        <p className="text-base md:text-2xl mb-5">
          Upto 50% Off on New Arrivals – Limited Time Offer
        </p>


        <button
          onClick={() => navigate("/products")}
          className="text-white font-medium text-base border border-white rounded-sm px-7 py-2 
              transition-all duration-900 ease-in-out
             hover:bg-white hover:text-black cursor-pointer">
          Shop Now
        </button>



      </div> */}


      {/* <div
        className="w-full h-100 bg-cover bg-center flex flex-col items-center justify-center text-white 
        text-center px-4 bnr-footer"
        style={{ backgroundImage: `url(${bannerFooter})` }} >
        <h2 className="text-2xl md:text-5xl font-thin mb-3">
          Get the Best Deals on <span className="font-bold"> Electronics!   </span>
        </h2>
        <p className="text-base md:text-2xl mb-5">
          Upto 50% Off on New Arrivals – Limited Time Offer
        </p>


        <button
          onClick={() => navigate("/products")}
          className="text-white font-medium text-base border border-white rounded-sm px-7 py-2 
              transition-all duration-900 ease-in-out
             hover:bg-white hover:text-black cursor-pointer">
          Shop Now
        </button>



      </div> */}

<BannerFooter />



    </div>

  );
}

export default Home;
