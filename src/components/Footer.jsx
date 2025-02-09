import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div
        className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 mt-10 py-[20px] px-[8vw] pt-[80px] border-[2px] rounded-md "
        id="footer"
      >
        <div className="grid w-[100%] grid-cols-[2fr_1fr_1fr] gap-20 ">
          <div className="flex flex-col gap-5 items-start">
            <img src={assets.logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio
              id error alias perspiciatis beatae impedit quis consequatur
              doloribus reiciendis.
            </p>
            <div className="flex gap-4 [&>img]:w-10 [&>img]:mr-2 [&>img]:cursor-pointer">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start">
            <h2 className="text-2xl text-white">COMPANY</h2>
            <ul className="">
              <Link to="#" className="[&>*]:mb-3">
                <li>Home</li>
              </Link>
              <a href="#" className="[&>*]:mb-3">
                <li>About us</li>
              </a>
              <a href="#" className="[&>*]:mb-3">
                <li>Delivery</li>
              </a>
              <a href="#" className="[&>*]:mb-3">
                <li>Privacy Policy</li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col gap-5 items-start">
            <h2 className="text-2xl text-white">GET IN TOUCH</h2>
            <ul className="[&>li]:mb-3 [&>li]:cursor-pointer">
              <li>+1 21322389736</li>
              <li>tamotao@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr className="w-[100%] h-[2px] my-[10px] bg-gray-400 border-none" />
        <p className="footer-copyright">
          Copyright 2024 &copy; Tomato.com All Right Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
