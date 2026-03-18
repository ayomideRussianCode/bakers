import React from 'react'

const CardItem = ({img, title, text, className="", children}) => {
  return (
    <>
      <div
        className={`rounded-xl shadow-lg p-2 my-auto group-hover:scale-105 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#ce0639]/20 ${className}`}
      >
        {img && <img className="h-6 w-6 m-4" src={img} alt="icon" />}
        {title && (
          <h2 className="text-[#404c60] m-4 text-xs font-medium">{title}</h2>
        )}
        {text && <p className="text-[10px] m-4 text-[#404c60]">{text}</p>}
        {children}
      </div>
    </>
  );
}

export default CardItem