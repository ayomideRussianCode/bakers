
const ProductPlan = () => {
  return (
    <div className="relative font-productSans bg-[#ce0639] h-full w-full pt-4 pb-32 my-10">
      {/* <img src="/breadpattern-rectangle.png" alt="" /> */}
      <div className=" flex items-center justify-center text-[#ffffff]">
        <div className="flex-col space-y-4 ">
          <h2 className="lg:text-2xl text-md font-semibold">
            We've got <span className="font-bold">flexible plans</span> for
            everyone!
          </h2>
          <div className="lg:mx-20">
            <p className="text-sm">Choose a plan that works best for you</p>
            <p>and your team.</p>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-4/5 rounded-lg bg-[#ffffff] shadow-md">
        <div className="flex gap-x-4">
          <div className="px-6 py-4 w-56">
            <h2>1-month plan</h2>
            <p className="text-xs">
              Perfect for teams that prefer monthly subscriptions. Unlimited
              access!
            </p>
            <h2>N25,000.00</h2>
            <p>All product features</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ProductPlan; 