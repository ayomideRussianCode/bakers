import React from 'react'

const Footer = () => {
  return (
    <>
      <div className=" relative h-56 text-[#ffffff] bg-[#672a4e]">
        <div className='absolute '>
          <img className="" src="/breadpattern-rectangle.png" alt="" />
        </div>
        <div>
          <div className=''>
            <ul className="lg:flex md:flex justify-evenly items-center text-xs font-productSans  py-12 px-12">
                <img className='h-14' src="/logo-big-diap 1.png" alt="footer-logo" />
              <li>61 Queens Street, Alagomeji, Yaba, Lagos</li>
              <li>big.nigeria@bakeryinitiatives.com</li>
              <div className="">
                <li>+234-818-838-0199 </li>
                <li>+234-818-838-0201</li>
                <li>+234-803-474-0253</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export const CTA = () => {
  return (
    <div className="font-productSans my-20 bg-[#ffffff]">
      <div className="flex justify-center items-center text-[#2b2b2b] font-bold text-3xl ">
        <h1>Take your bakery to the next level now.</h1>
      </div>
      <div className="flex justify-center my-6 text-[#979797] text-xs font-light ">
        <p> Try Bakery Management today!</p>
      </div>
      <div className="flex justify-center">
        <button
          className="no-underline font-productSans text-xs text-[#ffffff] rounded-lg shadow-md px-4 py-2 bg-[#ce0639]"
          href="#"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Footer