import React from "react";

export default function Modal({ open, onClose, title, message }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/10  flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 animate-fadeIn">
        
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
        
        <p className="text-gray-700 mb-4">{message}</p>

        <button
          onClick={onClose}
          className="bg-[#F47458] text-white px-4 py-2 rounded-lg w-full font-medium cursor-pointer"
        >
          OK
        </button>
      </div>
    </div>
  );
}
