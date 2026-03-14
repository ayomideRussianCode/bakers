import React from 'react'

const Card = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-[#ffffff] my-12 font-productSans">

        <div className="lg:flex md:flex lg:gap-x-10 ">
          <div className="w-56 rounded-xl shadow-lg p-2 my-auto">
            <img className="h-6 w-6 m-4" src="/icon-1.svg" alt="icon" />
            <h2 className="text-[#404c60] m-4 text-xs font-medium">
              Real time reports & analytics
            </h2>
            <p className="text-[10px] m-4 text-[#404c60]">
              Get real-time access to bakery information across all modules
              which include production,sales & inventory, and accounting, with a
              custom dashboard highlighting key performance indicators.
            </p>
          </div>
          <div className="w-56 rounded-xl shadow-lg p-2  my-auto">
            <img className="h-6 w-6 m-4" src="/icon-1.svg" alt="icon" />
            <h2 className="text-[#404c60] m-4 text-xs font-medium">
              Real time reports & analytics
            </h2>
            <p className=" text-[10px] m-4 text-[#404c60]">
              Get real-time access to bakery information across all modules
              which include production,sales & inventory, and accounting, with a
              custom dashboard highlighting key performance indicators.
            </p>
          </div>
          <div className="w-56 rounded-xl shadow-lg p-2 my-auto">
            <img className="h-6 w-6 m-4" src="/icon-1.svg" alt="icon" />
            <h2 className="text-[#404c60] m-4 text-xs font-medium">
              Real time reports & analytics
            </h2>
            <p className=" text-[10px] m-4 text-[#404c60]">
              Get real-time access to bakery information across all modules
              which include production,sales & inventory, and accounting, with a
              custom dashboard highlighting key performance indicators.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card