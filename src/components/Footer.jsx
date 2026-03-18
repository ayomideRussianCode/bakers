import Button from "./Button";

const Footer = () => {
  return (
    <div className="relative text-[#ffffff] bg-[#672a4e] overflow-hidden">
      
      {/* Decorative pattern - stays in corner, doesn't cover content */}
      <div className="absolute inset-y-0  left-0">
        <img className='hidden md:block' src="/breadpattern-rectangle.png" alt="footer-pattern" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center md:justify-evenly gap-8 py-12 px-8 text-xs font-productSans">
        
        {/* Logo */}
        <img className="h-14" src="/logo-big-diap 1.png" alt="footer-logo" />

        {/* Address */}
        <p className="text-center md:text-left">
          61 Queens Street, Alagomeji, Yaba, Lagos
        </p>

        {/* Email */}
        <p className="text-center md:text-left">
          big.nigeria@bakeryinitiatives.com
        </p>

        {/* Phone numbers */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p>+234-818-838-0199</p>
          <p>+234-818-838-0201</p>
          <p>+234-803-474-0253</p>
        </div>

      </div>
    </div>
  )
}

export const CTA = () => {
  return (
    <div className="font-productSans mt-60 mb-20 bg-[#ffffff]">
      <div className="flex text-center justify-center items-center text-[#2b2b2b] font-bold text-3xl ">
        <h1>Take your bakery to the next level now.</h1>
      </div>
      <div className="flex justify-center my-6 text-[#979797] text-xs font-light ">
        <p> Try Bakery Management today!</p>
      </div>
      <div className="flex text-center items-center justify-center">
        <Button>Create Account</Button>
      </div>
    </div>
  );
};

export default Footer