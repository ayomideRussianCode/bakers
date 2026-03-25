import { useState } from "react";
import Auth from "../components/Auth";
import { Input } from "../components/Auth";
import Button from "../components/Button";
import { stepTwoFields } from "../data/data";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../firebase";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";



const Password = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prevData = location.state;


  const [passwordData, setPasswordData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log("prevData:", prevData);
     console.log("email:", prevData?.email);
     console.log("password:", passwordData.password);

     if(!passwordData.password || !passwordData.confirmPassword){
      setError("Please fill in all fields")
      return
     }

    if (passwordData.password !== passwordData.confirmPassword) {
      setError("Passwords do not match");
      return
    }

    if(passwordData.password.length<6) {
      setError("Password must be at least 6 characters")
      return
    }
    
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        prevData.email,
        passwordData.password,
      );
      await updateProfile(result.user, {
        displayName: prevData.fullName
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(error);
       console.log("error code:", err.code);
       console.log("error message:", err.message);
    }
  };

  return (
    <Auth>
      <h2 className="my-4 font-semibold text-2xl ">Create Password</h2>
      {error && <p className="text-red-500 text-xs">{error}</p>}
      <form className="flex flex-col" onSubmit={handleSubmit}>
        {stepTwoFields.map((field, i) => (
          <Input
            key={i}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
            name={field.name}
            value={passwordData[field.name]}
            onChange={handleChange}
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
