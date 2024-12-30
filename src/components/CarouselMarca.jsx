import React, { useState } from "react"
import BmwLogo from "../assets/BmwLogo.png"

const CarouselMarca = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    BmwLogo,
    BmwLogo,
    BmwLogo,
    BmwLogo,
  ]

  const visibleSlides = 3

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex + 1) % (images.length - (visibleSlides - 1))
    )
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + images.length - (visibleSlides - 1)) %
      (images.length - (visibleSlides - 1))
    )
  }

  return (
    <div className="relative w-full overflow-hidden">

      <div className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${(activeIndex * 100) / visibleSlides}%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className=" flex flex-shrink-0 justify-center w-1/3 px-2">
            <img rounded-3xl
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full md:w-auto object-contain rounded-full "
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 -translate-y-1/2 bg-white/30 rounded-full p-2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
        onClick={prevSlide}
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
        onClick={nextSlide}
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
}

export default CarouselMarca
