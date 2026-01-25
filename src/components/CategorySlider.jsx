import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// images
import phone from "../assets/phone.png";
import smartwatch from "../assets/smartwatch.png";
import camera from "../assets/camera.png";
import headphone from "../assets/headphone.png";
import computer from "../assets/computer.png";
import gaming from "../assets/gaming.png";
import tablet from "../assets/tablet.svg";
import smarthome from "../assets/smarthome.svg";

const categories = [
  { name: "Phone", img: phone },
  { name: "Smart Watch", img: smartwatch },
  { name: "Camera", img: camera },
  { name: "Headphone", img: headphone },
  { name: "Computer", img: computer },
  { name: "Gaming", img: gaming },
  { name: "Tablet", img: tablet },
  { name: "Smart Home", img: smarthome },
];

function CategorySlider() {
  return (
    <div className="home-products max-w-7xl mx-auto px-6 py-10">
      <div className="product-header flex justify-between pb-8">
        <p className="font-inter font-medium md:text-2xl">Browse By Category</p>

        {/* icons */}
        <div className="arrow-icons flex text-2xl gap-3">
          <button className="custom-prev text-black cursor-pointer">
            <FaAngleLeft />
          </button>
          <button className="custom-next text-black cursor-pointer">
            <FaAngleRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{

          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {categories.map((cat, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gray-100 p-4 rounded-lg cursor-pointer text-center ">
              <img src={cat.img} alt={cat.name} className="h-20 mx-auto mb-2" />
              <p className="font-medium">{cat.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySlider;  