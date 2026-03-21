import Auth from "../components/Auth";
import { Input } from "../components/Auth";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const fields = [
  {
    label: "Create your password ",
    placeholder: "Enter password",
    type: "password",
  },
  { label: "Confirm password", placeholder: "Enter password", type: "password" },
];
const Password = () => {
  return (
    <Auth>
      <h2 className="my-4 font-semibold text-2xl ">Create Password</h2>
      <div className="flex my-4 items-center ">
        <img
          className="h-0.5 w-20 md:w-40 lg:w-40 "
          src="Line.png"
          alt="Line"
        />
        <p className="text-[#979797] mx-2 font-light text-xs">Or</p>
        <img
          className="h-0.5 w-20 md:w-40 lg:w-40 "
          src="Line.png"
          alt="Line"
        />
      </div>
      <form className="flex flex-col">
        {fields.map((field, i) => (
          <Input
            key={i}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
          />
        ))}
        <Button className=" w-full my-6 font-semibold ">Create Account</Button>
        <p className="text-xs text-center text-[#979797]">
          Already have an account?
          <Link to="/signup" className="text-[#ce0639] font-medium">
            {" "}
            Log In
          </Link>
        </p>
      </form>
    </Auth>
  );
};

export default Password;
