import Slider from "../components/slider";
import CardOne from "../components/cardone";
import CardTwo from "../components/cardTwo";
import CardThree from "../components/cardThree";
import ImageGallery from "../components/ImageGallery";
// import heading from '../components/heading';
import { cardOneData } from "../data/data.js";
import { cardTwoData } from "../data/data.js";
import { cardThreeData } from "../data/data.js";
function home() {
  return (
    <>
      <Slider />

      <div className="p-6 bg-slate-200">
      <h2 className="relative text-2xl font-bold text-gray-800 pb-2 mx-12 my-12">
          Priya
          <span className="absolute left-0 bottom-0 w-36 h-[2px] bg-blue-600"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardOneData.map((card, index) => (
            <CardOne
              key={index}
              imgSrc={card.imgSrc}
              headline={card.headline}
              description={card.description}
              label={card.label}
            />
          ))}
        </div>
        </div>
        <div className="p-6 bg-slate-100">
        <h2 className="relative text-2xl font-bold text-gray-800 pb-2 mx-12 my-12">
          Priya
          <span className="absolute left-0 bottom-0 w-36 h-[2px] bg-blue-600"></span>
        </h2>
        <div className="grid grid-cols-2 sm:gap-2 lg:grid-cols-4 gap-6">
          {cardTwoData.map((card, index) => (
            <CardTwo
              key={index}
              imgSrc={card.imgSrc}
              headline={card.headline}
            />
          ))}
        </div>
      </div>
      {cardThreeData.map((card, index) => (
        <CardThree
          key={index}
          headline={card.headline}
          description={card.description}
          subheading={card.subheading}
          buttonText={card.buttonText}
          imgSrc={card.imgSrc}
          imageAlt={card.imageAlt}
          paraDescription={card.paraDes}
        />
      ))}
      <ImageGallery />
    </>
  );
}
export default home;
