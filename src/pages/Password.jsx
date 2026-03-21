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
      <form className="flex flex-col">
        {fields.map((field, i) => (
          <Input
            key={i}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
          />
        ))}
        <div className="relative flex justify-center items-center mx-4 my-4 ">
          <input
            type="checkbox"
            className="absolute my-1 text-[#979797] -top-0.5 -left-4"
          />
          <p className="mx-2 text-[#979797] text-xs ">
            By signing up you agree to our{" "}
            <span className="text-[#ce0639] font-semibold">
              <Link>Terms of Service</Link>
            </span>{" "}
            and{" "}
            <span className="text-[#ce0639] font-semibold">
              <Link>Privacy Policy</Link>
            </span>
            , which outline your rights and obligations with respect to your use
            of the Service and processing of your data.
          </p>
        </div>
        <p className="my-6 text-[#979797] text-xs mx-4">
          We’re committed to protecting your data privacy. Permissions are part
          of our continuing compliance efforts.
        </p>
        <Button className=" w-full my-6 font-semibold ">Create Account</Button>
        <p className="text-xs text-center text-[#979797]">
          Already have an account?
          <Link to="/login" className="text-[#ce0639] font-medium">
            {" "}
            Log In
          </Link>
        </p>
      </form>
    </Auth>
  );
};

export default Password;
