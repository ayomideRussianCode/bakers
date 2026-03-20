import Auth from "../components/Auth";

const SignUp = () => {
  const formDetails = [
    {
      title: "Create Account",
    },
    {
      placeholder: "First name and last name",
    },
    {
      placeholder: "First name and last name",
    },
    {
      placeholder: "First name and last name",
    },
    {
      placeholder: "First name and last name",
    },
  ];
  return (
    <div>
      {formDetails.map((formDetail) => (
        <Auth  />
      ))}
    </div>
  );
};

export default SignUp;
