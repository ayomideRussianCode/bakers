
const Button = (text) => {
  return (
    <div>
      <button className="no-underline font-productSans text-xs text-[#ffffff] rounded-lg shadow-md px-4 py-2 bg-[#ce0639]">
        {text}
      </button>
    </div>
  );
}

export default Button