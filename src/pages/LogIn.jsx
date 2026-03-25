import Auth from "../components/Auth";
import { Input } from "../components/Auth";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';

const loginFields = [
  {
    label: "Email Address",
    placeholder: "Enter your email address",
    type: "email",
    name: "email"
  },
  { label: "Password", placeholder: "Enter password", type: "password", name: "password" },
];
const LogIn = () => {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({ email: "", password: "" });
   const [error, setError] = useState("");


    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      setError ("Please fill in all fields")
      return
    }
    try{
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
      navigate("/")
    } catch (err){
      if(err.code === "auth/user-not-found") {
        setError("No account found with this email")
      } else if (err.code === "auth/wrong-password"){
        setError("Incorrect password")
      } else if(err.code === "auth/invalid-credentials"){
        setError("Invalid email or password")
      } else {
        setError(err.message)
      }
    }
   }
  return (
    <Auth>
      <h2 className="my-4 font-semibold text-2xl ">Welcome Back!</h2>
      {error && <p className="text-red-500 text-xs">{error}</p>}

      <div className="flex items-center bg-[#ffe0e8] rounded-lg shadow-xs">
        <img className="mx-2" src="/google-icon.png" alt="google-icon" />
        <p className="mx-2 text-xs font-normal">Sign in with Google</p>
      </div>
      <div className="flex my-4 justify-center items-center ">
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
      <form className="flex flex-col" onSubmit={handleSubmit}>
        {loginFields.map((field, i) => (
          <Input
            key={i}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
            name= {field.name}
            value={formData[field.name]}
            onChange={handleChange}
          />
        ))}
        <div className="flex justify-between my-2">
          <div className="flex items-center">
            <input type="checkbox" className="text-[#979797]" />
            <p className="mx-2 text-[#979797] text-xs">Remember me</p>
          </div>
          <div>
            <Link className="text-[#ce0639] text-xs items-center">
              Forgot Password?
            </Link>
          </div>
        </div>
        <Button className=" w-full my-6 font-semibold ">Log in</Button>
        <p className="text-xs text-center text-[#979797]">
          Don't have an account?
          <Link to="/signup" className="text-[#ce0639] font-medium">
            {" "}
            Create Account
          </Link>
        </p>
      </form>
    </Auth>
  );
};

export default LogIn;
