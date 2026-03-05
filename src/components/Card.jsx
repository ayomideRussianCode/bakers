import React from 'react'

const Card = () => {
  return (
    <>
      <section className=" bg-[#ffffff] sm:flex mx-14 lg:mx-60 gap-x-8 my-12 font-productSans">
        <div className="w-56 rounded-xl shadow-lg p-4 my-auto">
          <img
            className="h-6 w-6 m-4"
            src="../../public/icon-1.svg"
            alt="icon"
          />
          <h2 className="text-[#404c60] m-4 text-xs font-medium">
            Real time reports & analytics
          </h2>
          <p className=" text-[10px] m-4 text-[#404c60]">
            Get real-time access to bakery information across all modules which
            include production,sales & inventory, and accounting, with a custom
            dashboard highlighting key performance indicators.
          </p>
        </div>
        <div className="w-56 rounded-xl shadow-lg p-2  my-auto">
          <img
            className="h-6 w-6 m-4"
            src="../../public/icon-1.svg"
            alt="icon"
          />
          <h2 className="text-[#404c60] m-4 text-xs font-medium">
            Real time reports & analytics
          </h2>
          <p className=" text-[10px] m-4 text-[#404c60]">
            Get real-time access to bakery information across all modules which
            include production,sales & inventory, and accounting, with a custom
            dashboard highlighting key performance indicators.
          </p>
        </div>
        <div className="w-56 rounded-xl shadow-lg p-2 my-auto">
          <img
            className="h-6 w-6 m-4"
            src="../../public/icon-1.svg"
            alt="icon"
          />
          <h2 className="text-[#404c60] m-4 text-xs font-medium">
            Real time reports & analytics
          </h2>
          <p className=" text-[10px] m-4 text-[#404c60]">
            Get real-time access to bakery information across all modules which
            include production,sales & inventory, and accounting, with a custom
            dashboard highlighting key performance indicators.
          </p>
        </div>
      </section>
    </>
  );
}

export default Card