
import Slider from "../components/slider";
import Card from '../components/cardone';
import { cardData } from '../data/data.js'; 
function home(){
    return (
        <>
        <Slider/>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          imgSrc={card.imgSrc}
          headline={card.headline}
          description={card.description}
          label={card.label}
        />
      ))}
    </div>
        </>
    )
}
export default home;