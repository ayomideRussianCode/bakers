
const Button = ({children, onClick, className=""}) => {
  return (
    <div>
      <button onClick={onClick}  className={`no-underline font-productSans text-xs text-[#ffffff] rounded-lg shadow-md px-4 py-2 bg-[#ce0639] ${className}`}>
        {children}
      </button>
    </div>
  );
}

export default Button