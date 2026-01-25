import React from "react";
import HeroFooter from "../assets/banner-footer.png"
import { useNavigate } from "react-router-dom";



function BannerFooter (){
    const navigate = useNavigate();

  return (
   

 <div
        className="w-full h-70 md:h-100 bg-cover bg-center flex flex-col items-center justify-center text-white 
        text-center px-4 bnr-footer"
        style={{ backgroundImage: `url(${HeroFooter})` }} >
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



      </div>
      
  );
}

export default BannerFooter;
