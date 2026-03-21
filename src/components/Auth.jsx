const Auth = ({ children, className = "" }) => {
  return (
    <div className="flex font-productSans ">
      {/* LHS */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col mx-10 lg:mx-30 my-2  ">
          <div className="flex">
            <img className={`h-20 w-20 ${className}`} src="/Logo.svg" alt="" />
          </div>
          {children}
        </div>
      </div>
      {/* RHS */}
      <div className="hidden lg:flex ">
        <img src="/auth-bread-pattern.png" className="bg-[#672a4e] " alt="" />
      </div>
    </div>
  );
};

export default Auth;

export const Input = ({ label, placeholder = "", type = "" }) => {
  return (
    <>
      <label className="text-md my-2 text-[#2b2b2b] font-normal" htmlFor="">
        {label}
      </label>
      <input
        className="border outline-0 border-[#979797] text-[#979797] font-extralight text-sm p-2 rounded-sm"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};
