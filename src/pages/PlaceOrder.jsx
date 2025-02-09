import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <form
        action="#"
        className="flex items-start justify-between gap-12 mt-24 place-order"
      >
        <div className=" w-[100%] max-w-[max(30%,500px)] place-order-left">
          <h2 className="text-3xl font-semibold mb-14">Delivery Information</h2>
          <div className="flex gap-3 mutlifield">
            <input
              type="text"
              placeholder="First Name"
              className="mb-3 w-[100%] p-[10px] border-[1px] border-[#c5c5c5]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="mb-3 w-[100%] p-[10px] border-[1px] border-[#c5c5c5]"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="mb-3 w-[100%] p-[10px] border-[1px] border-[#c5c5c5]"
          />
          <input
            type="text"
            placeholder="Address"
            className="mb-3 w-[100%] p-[10px] border-[1px] border-[#c5c5c5]"
          />
          <div className="flex gap-3 mutlifield">
            <input
              type="text"
              placeholder="City"
              className="mb-3 w-[100%] p-[10px] border-[1px] border-[#c5c5c5]"
            />
            <input
              type="text"
              placeholder="State"
              className="mb-3 w-[100%] p-[10px] border-[1px] border-[#c5c5c5]"
            />
          </div>
          <div className="flex gap-3 mutlifield">
            <input
              type="text"
              placeholder="Pin Code"
              className="mb-3 w-[100%] p-[10px] border-[1px] border-[#c5c5c5]"
            />
            <input
              type="text"
              placeholder="Country"
              className="mb-3 w-[100%] p-[10px] border-[1px] border-[#c5c5c5]"
            />
          </div>
          <input
            type="text"
            placeholder="Moblie No"
            className="mb-3 w-[100%] p-[10px] border-[1px] border-[#c5c5c5]"
          />
        </div>
        <div className="w-[100%] max-w-[max(40%,500px)] place-order-right">
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
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 4}
              </div>
            </div>
            <button
              // onClick={() => navigate("/order")}
              className="bg-[#ff6347] border-none p-3 mt-8 text-white w-[max(15vw,200px)] rounded cursor-pointer font-semibold"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
