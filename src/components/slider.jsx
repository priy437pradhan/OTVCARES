import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Img from '../assets/SliderImg.jpg';
import Img2 from '../assets/SliderImg2.jpg';
import Img3 from '../assets/SliderImg3.jpg';

const slides = [
  { id: 1, image: Img, alt: 'Slide 1' },
  { id: 2, image: Img2, alt: 'Slide 2' },
  { id: 3, image: Img3, alt: 'Slide 3' },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-y-1/2 left-4 flex items-center justify-center">
        <button
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute inset-y-1/2 right-4 flex items-center justify-center">
        <button
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-4 left-4">
        <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 focus:outline-none">
          Impact Button
        </button>
      </div>
    </div>
  );
};

export default Slider;
