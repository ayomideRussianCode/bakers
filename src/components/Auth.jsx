import { Link } from "react-router-dom";
import Button from "./Button";

const Auth = ({ children, title, className = "" }) => {
  return (
    <div className="flex font-productSans ">
      <div className="w-1/2">
        <div className="flex flex-col mx-30 my-2  ">
          <div className="flex">
            <img className={`h-20 w-14 ${className}`} src="/Logo.svg" alt="" />
          </div>
          <h2 className="my-4 font-semibold text-2xl ">{title}</h2>
          <form className="flex flex-col">
            <Input />
            <Button className=" w-full my-6 font-semibold "></Button>
            <p className="text-xs text-center text-[#979797]">
              Already have an account?
              <Link className="text-[#ce0639] font-medium"> Log In</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="">
        <img
          src="/auth-bread-pattern.png"
          className="bg-[#672a4e] "
          alt=""
        />
      </div>
      {children}
    </div>
  );
};

export default Auth;






export const Input = ({ label, placeholder="" }) => {
  return (
    <>
      <label className="text-md my-2 text-[#2b2b2b] font-normal" htmlFor="">
        {label}
      </label>
      <input
        className="border border-[#979797] text-[#979797] font-extralight text-sm p-2 rounded-sm"
        type="text"
        placeholder={placeholder}
      />
    </>
  );
};
