import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addCart, removeCart } = useContext(StoreContext);

  return (
    <>
      <div className="w-[100%] m-auto mb-2 rounded-2xl shadow-[0px_0px_10px_#00000015] hover:shadow-[10px_10px_8px_#343434]  transition duration-300 animate-fadeIn">
        <div className="relative">
          <img
            src={image}
            alt=""
            className="w-[100%] rounded-t-[15px] rounded-b-[0px]"
          />
          {!cartItem[id] ? (
            <img
              className="w-9 absolute bottom-4 right-4 cursor-pointer  rounded-full"
              src={assets.add_icon_white}
              onClick={() => addCart(id)}
            />
          ) : (
            <div className="absolute bottom-4 right-4 flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
              <img
                src={assets.remove_icon_red}
                className="w-[30px]"
                onClick={() => removeCart(id)}
                alt=""
              />
              {cartItem[id]}
              <img
                src={assets.add_icon_green}
                className="w-[30px]"
                onClick={() => addCart(id)}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <p className="text-xl font-medium">{name}</p>
            <img src={assets.rating_starts} alt="" className="w-[70px]" />
          </div>
          <p className="text-[#676767] text-[16px]">{description}</p>
          <p className="text-[#e55c44] text-xl font-medium">${price}</p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
