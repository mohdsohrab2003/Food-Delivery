import React, { useState } from "react";
import { assets } from "../assets/assets";

const LoginPop = ({ setShowLogin }) => {
  const [currState, setCurrentState] = useState("Login");
  return (
    <>
      {/* login-popup */}
      <div className="absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid login-popup">
        <form
          action="#"
          className="self-center m-auto w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-6 px-8 rounded-lg text-[14px] animate-fadeIn  login-popup-contianer"
        >
          <div className="flex justify-between items-center text-black login-popup-title">
            <h1 className="text-3xl font-medium">{currState}</h1>
            <img
              className="w-4 cursor-pointer"
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5  login-popup-input">
            {currState === "Login" ? (
              <></>
            ) : (
              <input
                type="text"
                placeholder="Your Name"
                required
                className="outline-none border-2 border-[#232323]rounded p-3"
              />
            )}

            <input
              type="emial"
              placeholder="Your Email"
              required
              className="outline-none border-2 border-[#232323]rounded p-3"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="outline-none border-2 border-[#232323]rounded p-3"
            />
          </div>
          {currState === "Sign Up" ? (
            <div className="flex items-start gap-2 -mt-2  login-pop-conditin">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="m-1"
              />
              <p>By Continuing, I agree to the term of use & Privacy</p>
            </div>
          ) : (
            <></>
          )}
          <button className="border-none p-3 rounded text-white bg-[#ff6347] text-[15px] cursor-pointer">
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>

          {currState === "Login" ? (
            <p>
              Create a new Account
              <span
                onClick={() => setCurrentState("Sign Up")}
                className="cursor-pointer text-[#ff6347] font-medium"
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have a Account
              <span
                onClick={() => setCurrentState("Login")}
                className="cursor-pointer  text-[#ff6347] font-medium"
              >
                Click here
              </span>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginPop;
