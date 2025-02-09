import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { RiDeleteBinFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItem, removeCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <>
      <div className=" m-24 cart">
        <div className="cart-item">
          <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]  cart-item-title [&>p]:font-medium">
            <p>Iitem</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr className="h-[2px] bg-[#e2e2e2] border-none" />
          {food_list.map((item, index) => {
            if (cartItem[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] my-3 text-black cart-item-tittle cart-items-item">
                    <img src={item.image} alt="" className="w-14" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>${item.price * cartItem[item._id]}</p>
                    <p
                      onClick={() => removeCart(item._id)}
                      className="cursor-pointer"
                    >
                      <RiDeleteBinFill />
                    </p>
                  </div>
                  <hr className="h-[2px] bg-[#e2e2e2] border-none" />
                </div>
              );
            }
          })}
        </div>
        <div className="flex m-20 justify-between gap-[max(12vw,20px)]  bottom-cart">
          <div className="flex flex-1 flex-col gap-5 cart-totols">
            <h2 className="text-2xl font-semibold">Cart Totols</h2>
            <div className=" [&>div]:text-[#555] [&>hr]:my-3">
              <div className="flex justify-between cart-totals-details">
                <p>Sub Totol</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="flex justify-between cart-totals-details">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="flex justify-between cart-totals-details">
                <b className="text-xl font-medium">Totals</b>
                <b>
                  {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 4}
                </b>
              </div>
            </div>
            <button
              onClick={() => navigate("/order")}
              className="bg-[#ff6347] border-none p-3 text-white w-[max(15vw,200px)] rounded cursor-pointer font-semibold"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="flex-1 cart-promo-code">
            <div>
              <p className="text-[#555] text-[20px]">
                If you have a promo code, Enter it here
              </p>
              <div className=" flex mt-3 justify-between items-center rounded bg-[#aeaeae]  cart-promocode-input">
                <input
                  className="bg-transparent border-none  outline-none pl-3"
                  type="text"
                  placeholder="Enter Promo Code"
                />
                <button className="w-[max(12vw,150px)] py-2 px-1 bg-black text-white rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
