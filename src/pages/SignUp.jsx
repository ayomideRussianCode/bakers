import { useState } from "react";
import Auth from "../components/Auth";
import { Input } from "../components/Auth";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { stepOneFields } from "../data/data";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
  });
    const [error, setError] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleNext = (e) => {
    e.preventDefault();
      console.log("formData:", formData) 

    if(!formData.fullName || !formData.email || !formData.phoneNumber || !formData.companyName){
      setError("Please fill in all input fields")
      return
    }
    //passing form data to the password page via state
    navigate("/passwordpage", { state: formData });
  }

  return (
    <Auth>
      <h2 className="my-4 font-semibold text-lg lg:text-2xl ">
        Create Account
      </h2>
      {error && <p className="text-red-500 text-xs">{error}</p>}

      <form className="flex flex-col" onSubmit={handleNext}>
        {stepOneFields.map((field, i) => (
          <Input
            key={i}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
          />
        ))}
        <Button className=" w-full my-6 font-semibold ">Continue</Button>
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

export default SignUp;

// to track the current step of the form and the data entered by the user. the step state variable is initialized to 1, indicating the first step of the form, and the formData state variable is initialized with empty values for each field in the form. The handleChange function is used to update the formData state variable whenever the user enters data into the form fields. it takes an event object as an argument and updates the formData state variable by spreading the existing formData and updating the specific field that corresponds to the name attribute of the input element that triggered the event. This allows the form to keep track of the user's input as they progress through the different steps of the form.
