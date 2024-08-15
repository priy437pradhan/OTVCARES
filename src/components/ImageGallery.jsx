import { useState } from 'react';
import Img from '../assets/SliderImg.jpg';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    { src: Img, alt: 'Image 1', description: 'Description for image 1' },
    { src: Img, alt: 'Image 2', description: 'Description for image 2' },
    { src: Img, alt: 'Image 3', description: 'Description for image 3' },
    { src: Img, alt: 'Image 4', description: 'Description for image 4' },
    { src: Img, alt: 'Image 5', description: 'Description for image 5' },
  ];

  return (
    <div className="flex flex-col items-center bg-red-100 pt-20 p-6 rounded-lg shadow-lg">
      <div className="flex space-x-6 mb-6">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`cursor-pointer transition-transform transform ${
              selectedImage === index ? 'scale-110 translate-y-[-12px]' : 'scale-100'
            } `}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-32 h-32 object-cover rounded-full shadow-md border-4 border-white"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-6 bg-white p-4 rounded-lg shadow-md">
        <p className="text-lg text-gray-800">{images[selectedImage].description}</p>
      </div>
    </div>
  );
};

export default ImageGallery;
