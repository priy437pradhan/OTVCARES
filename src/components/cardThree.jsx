
const CardThree = ( {imageAlt,imgSrc, buttonText,subheading,description,headline,paraDescription}) => {
    
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white p-6 lg:p-12 shadow-lg rounded-lg">
    <div className="lg:w-1/2 mb-6 lg:mb-0">
      <h2 className="relative text-2xl font-bold text-gray-800 pb-2 mb-6">
        {headline}
        <span className="absolute left-0 bottom-0 w-36 h-[2px] bg-blue-600"></span>
      </h2>
      <p className="text-lg text-gray-600 mb-4">{description}</p>
    
        <h3 className="text-xl font-semibold text-gray-700 mb-6">{subheading}</h3>
        <p className="text-lg text-gray-600 mb-4">{paraDescription}</p>
    
      <button
        className="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        {buttonText}
      </button>
    </div>

    <div className="lg:w-1/2 relative">
      <img
        src={imgSrc}
        alt={imageAlt}
        className="w-11/12 h-auto object-cover rounded-lg m-10"
      />
    </div>
  </div>
  );
};

export default CardThree;
