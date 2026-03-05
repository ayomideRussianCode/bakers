import React from 'react'

const InstructionsSection = () => {
  return (
    <section className="lg:w-1/2 bg-[#ffffff]">
      <div className="relative mx-12 lg:mx-20 my-32">
        <div>
          <img className="h-90" src="/bread-pattern.png" alt="" />
        </div>
        <div className="absolute -top-10 -left-6 lg:-left-4">
          <img className="h-90" src="/bakery_img 2.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default InstructionsSection