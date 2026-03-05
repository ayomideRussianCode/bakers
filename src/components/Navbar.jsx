// import { RxHamburgerMenu } from "react-icons/rx";
// import { GrClose } from "react-icons/gr";

// import { useState } from "react";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex w-auto bg-[#ffffff] items-center justify-between mx-6 lg:mx-24 my-2 sm:px-4 ">
        <div className="sm:space-x-8 sm:px-6 lg:px-8 flex ">
          <img className="h-8" src="../../public/Logo.svg" alt="Logo" />
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
        <div className="">
          <nav className=" hidden md:flex items-center px-5 py-2 space-x-8">
            <a
              className="no-underline font-productSans text-[#404c60] text-xs"
              href="#"
            >
              FAQs
            </a>
            <a
              className="no-underline font-productSans text-xs text-[#404c60]"
              href="#"
            >
              Log in
            </a>
            <a
              className="no-underline font-productSans text-xs text-[#ffffff] rounded-lg shadow-md px-4 py-2 bg-[#ce0639]"
              href="#"
            >
              Create Account
            </a>
          </nav>
        </div>
        {/* <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <nav className="items-center px-5 py-2 space-x-8">
            <a
              className="no-underline font-productSans text-[#404c60] text-xs"
              href="#"
            >
              FAQs
            </a>
            <a
              className="no-underline font-productSans text-xs text-[#404c60]"
              href="#"
            >
              Log in
            </a>
            <a
              className="no-underline font-productSans text-xs text-[#fff] rounded-lg shadow-md px-4 py-2 bg-[#ce0639]"
              href="#"
            >
              Create Account
            </a>
          </nav>
        </div> */}
      </header>
    </>
  );
};

export const Hero = () => {
  return (
    <>
      <div>
        <img
          className="h-50 object-cover sm:h-60 md:h-70 lg:h-full w-full"
          src="../../public/Bakery image 1 .png"
          alt=""
        />
      </div>
      <div className="flex m-10 w-auto justify-around items-center bg-[#ffffff] font-bold text-xl font-productSans">
        <h2 className=" text-[#2b2b2b]">
          Your <span className="text-[#ce0639]">all-in-one</span> bakery
          solution
        </h2>
      </div>
    </>
  );
};

export default Navbar;
