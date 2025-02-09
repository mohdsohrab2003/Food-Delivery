import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <>
      <div
        className="my-auto mx-auto mt-[90px] mb-16 text-[max(3vw,20px)] text-center font-medium"
        id="app-download"
      >
        <p>
          For Better Experience Download <br /> Tomoto App
        </p>
        <div className="flex justify-center gap-[max(2vw,10px)] mt-[20px] cursor-pointer">
          <a href="">
            <img
              className="w-[max(20vw,130px)] max-w-[180px] hover:mx-2 transform duration-300 hover:scale-150"
              src={assets.play_store}
              alt=""
            />
          </a>
          <a href="">
            <img
              className="w-[max(20vw,120px)] max-w-[180px] hover:mx-2 transform duration-300 hover:scale-150"
              src={assets.app_store}
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
