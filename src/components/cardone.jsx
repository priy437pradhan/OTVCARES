
const Card = ({ imgSrc, headline, description, label }) => {
  return (
    <div className="relative max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:border hover:border-blue-300">
      {label && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
          {label}
        </span>
      )}
      <img
        src={imgSrc}
        alt={headline}
        className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 transition-transform duration-300 hover:translate-y-[-2px]">
          {headline}
        </h3>
        <p className="text-gray-700 mb-4 transition-opacity duration-300 hover:opacity-80">
          {description}
        </p>
        <a
          href="#"
          className="text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
