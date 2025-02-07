import React, { useState } from "react";

const GaleyCar = ({ images = [] }) => {
  const [activeGaleyIndex, setActiveGaleyIndex] = useState(0);

  const visibleGalery = 3;

  const nextGaley = () => {
    setActiveGaleyIndex(
      (prevIndex) => (prevIndex + 1) % (images.length - (visibleGalery - 1))
    );
  };

  const prevGalery = () => {
    setActiveGaleyIndex(
      (prevIndex) =>
        (prevIndex - 1 + images.length - (visibleGalery - 1)) %
        (images.length - (visibleGalery - 1))
    );
  };

  return (
    console.log(images),

    <div className="relative w-full z-15 overflow-hidden max-w-screen-xl mx-auto ">
      <div
        className="flex transition-transform duration-700 ease-in-out  "
        style={{
          transform: `translateX(-${
            (activeGaleyIndex * 100) / visibleGalery
          }%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-1/3">
            <img
              src={src} // Corrigir o caminho da imagem
              alt={`Slide ${index + 1}`}
              className="w-full md:w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 -translate-y-1/2 bg-white/30 rounded-full p-2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
        onClick={prevGalery}
      >
        <svg
          className="w-6 h-6 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 -translate-y-1/2 bg-white/30 rounded-full p-2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
        onClick={nextGaley}
      >
        <svg
          className="w-6 h-6 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default GaleyCar;
