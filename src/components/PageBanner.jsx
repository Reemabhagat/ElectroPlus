import React from "react";


function PageBanner({ image, title, subtitle, position }) {
  return (
    <div
      className="w-full h-[200px] md:h-[250px] bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${image})`, backgroundPosition: position  }}  >
      <div className=" w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-medium caveat-brush-regular text-gray">{title}</h1>

        {subtitle && (
          <p className="text-sm md:text-xl tracking-wide mt-2 caveat-brush-regular text-gray-200">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default PageBanner;
