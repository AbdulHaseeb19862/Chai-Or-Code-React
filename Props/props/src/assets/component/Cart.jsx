import React from "react";

function Cart({ data }) {
  return (
    <>
      {data.map((item, key) => (
        <div key={key} className="relative h-[400px] w-[300px] rounded-md mb-4">
          <img
            src={item.img}  
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{item.title}</h1>
            <p className="mt-2 text-sm text-gray-300">{item.para}</p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
              {item.btnText} →
            </button>
          </div>{" "}
        </div>
      ))}
    </>
  );
}

export default Cart;
