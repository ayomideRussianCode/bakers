import { cardData } from "../data/data";
import CardItem from "./CardItem";

console.log('hi', cardData);
const Card = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-[#ffffff] my-12 font-productSans">
        <div className="lg:flex md:flex lg:gap-x-10 ">
          {cardData.map((card, i) => (
          <CardItem key={i} img={card.img} title={card.title} text={card.text} className="w-56 "/>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;
