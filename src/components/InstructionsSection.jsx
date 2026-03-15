import React from 'react'

const InstructionsSection = () => {
  return (
    <section className="flex justify-center font-productSans m-10">
      <div className="flex gap-x-10  mb-8 justify-center">
        <div className="hidden lg:flex bg-[#ffffff]">
          <div className="relative mt-6">
            <div>
              <img className="h-40 lg:h-90" src="/bread-pattern.png" alt="" />
            </div>
            <div className="absolute -top-6 lg:-top-10 -left-4">
              <img className="h-40 lg:h-86" src="/bakery_img 2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h2 className="text-[#2b2b2b] font-bold text-md md:text-4xl lg:text-4xl">
            Getting started with
          </h2>
          <h2 className="text-[#2b2b2b] font-bold text-md md:text-4xl lg:text-4xl">
            Bakery management is
          </h2>
          <h2 className="text-[#2b2b2b] font-bold text-md md:text-4xl lg:text-4xl">
            as easy as these few steps
          </h2>
          <p className="my-8 text-[#404c60] lg:w-1/2 md:w-1/2 w-full text-xs">
            Give your business the gift of a cloud based bakery management
            system, save energy and time. Go digital, maximizing output.
            Integrate Bakery Management easily with these steps:
          </p>

          <div className="font-productSans my-4">
            <div className="flex gap-x-6 ">
              <img className="h-8 w-8" src="/icon-4.svg" alt="icon" />

              <div>
                <h3 className="text-xs font-semibold my-2 text-[#5b5b5b]">
                  Create Account
                </h3>

                <p className="text-[10px] font-extralight text-[#979797]  w-full lg:w-1/2">
                  Conveniently create your account and proceed with our
                  user-friendly onboarding process for you and your team.
                </p>
              </div>
            </div>
          </div>
          <div className="font-productSans my-4">
            <div className="flex gap-x-6">
              <img className="h-8 w-8" src="/icon-4.svg" alt="" />

              <div>
                <h3 className="font-semibold text-xs my-2 text-[#5b5b5b]">
                  Create Account
                </h3>

                <p className=" text-[10px] font-light text-[#979797]  w-full lg:w-1/2">
                  Conveniently create your account and proceed with our
                  user-friendly onboarding process for you and your team.
                </p>
              </div>
            </div>
          </div>
          <div className="font-productSans my-4">
            <div className="flex gap-x-6">
              <img className="h-8 w-8" src="/icon-4.svg" alt="" />

              <div>
                <h3 className="text-xs font-semibold my-2 text-[#5b5b5b]">
                  Create Account
                </h3>

                <p className="text-[10px] font-light text-[#979797] w-full lg:w-1/2">
                  Conveniently create your account and proceed with our
                  user-friendly onboarding process for you and your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default InstructionsSection