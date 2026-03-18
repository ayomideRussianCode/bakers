import { plansCardContent } from "../data/data";
import CardItem from "./CardItem";
import Button from "../components/Button";

const ProductPlan = () => {
  return (
    <div className="relative font-productSans bg-[#ce0639] h-full w-full pt-4 pb-32 my-10">
      {/* <img src="/breadpattern-rectangle.png" alt="" /> */}
      <div className=" flex text-center justify-center text-[#ffffff]">
        <div className="flex-col space-y-4 ">
          <h2 className="lg:text-2xl text-md font-medium">
            We've got <span className="font-bold">Flexible Plans</span> for
            everyone!
          </h2>
          <div className="lg:mx-20">
            <p className="text-sm w-60 text-center">
              Choose a plan that works best for you and your team.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute font-productSans -bottom-40 left-1/2 -translate-x-1/2 w-full px-10">
        {/* mobile view */}
        <div className="flex lg:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-x-6 pl-6">
          {plansCardContent.map((card, i) => (
            <CardItem
              key={i}
              className="min-w-44 shrink-0 snap-center bg-white shadow-lg last:pr-6"
            >
              <h2 className="text-xs font-medium my-2 text-[#2b2b2b] text-center">
                {card.duration}
              </h2>
              <h2 className="text-[8px] text-[#979797] text-center">
                {card.text}
              </h2>
              <h2 className="text-[#2b2b2b] text-md font-bold text-center">
                {card.price}
              </h2>
              <p className="text-[8px] my-4 text-[#979797] text-center">
                {card.billingMethod}
              </p>
              <div className="flex justify-center">
                <img className="w-2" src={card.img} alt="icon" />
                <p className="mx-2 text-[8px] my-6 text-[#979797]">
                  {card.productFeature}
                </p>
              </div>
              <div className="flex justify-center">
                <Button className=" my-4 p-4">{card.buttonText}</Button>
              </div>
            </CardItem>
          ))}
        </div>
        <div className="hidden lg:flex transition-transform duration-300 group-hover:scale-105 text-center font-productSans justify-center gap-x-10 ">
          {plansCardContent.map((card, i) => (
            <CardItem key={i} className="w-44 bg-white shadow-lg">
              <h2 className="text-xs font-medium my-2 text-[#2b2b2b]">
                {card.duration}
              </h2>
              <h2 className="text-[8px] text-[#979797]">{card.text}</h2>
              <h2 className="text-[#2b2b2b] text-md font-bold">{card.price}</h2>
              <p className="text-[8px] my-4 text-[#979797]">
                {card.billingMethod}
              </p>
              <div className="flex justify-center">
                <img className="w-2" src={card.img} alt="icon" />
                <p className="mx-2 text-[8px] my-6 text-[#979797]">
                  {card.productFeature}
                </p>
              </div>
              <Button className="my-4">{card.buttonText}</Button>
            </CardItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPlan;
