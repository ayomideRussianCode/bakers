import { cardData } from "../data/data";

console.log('hi', cardData);
const Card = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-[#ffffff] my-12 font-productSans">
        <div className="lg:flex md:flex lg:gap-x-10 ">
          {cardData.map((card, i) => (
            <div
              key={i}
              className="w-56 rounded-xl shadow-lg p-2 my-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#ce0639]/20"
            >
              <img className="h-6 w-6 m-4" src={card.img} alt="icon" />
              <h2 className="text-[#404c60] m-4 text-xs font-medium">
                {card.title}
              </h2>
              <p className="text-[10px] m-4 text-[#404c60]">{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;
