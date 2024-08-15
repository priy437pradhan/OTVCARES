
const CardTwo = ({ imgSrc, headline }) => {
  return (
    <div className="relative max-w-xs mx-auto rounded overflow-hidden shadow-lg group">
      <img className="w-full" src={imgSrc} alt={headline} />

      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-left p-4 w-full h-full flex items-center justify-center opacity-0 transform translate-x-[-50%] translate-y-[50%] scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-700 ease-in-out">
        <h2 className="text-lg font-semibold sm:text-sm text-center">{headline}</h2>
      </div>

      <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white text-left p-4 transition-all duration-500 ease-in-out group-hover:opacity-0">
        <h2 className="text-sm lg:text-lg font-semibold">{headline}</h2>
      </div>
    </div>
  );
};

export default CardTwo;
