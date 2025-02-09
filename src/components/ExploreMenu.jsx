import React from "react";
import { menu_list } from "../assets/assets";
const ExploreMenu = ({ category, setCategroy }) => {
  return (
    <>
      <div className="flex flex-col gap-5" id="explore-menu">
        <h1 className="text-[#262626] font-medium text-2xl">
          Explore Our Menu
        </h1>
        <p className="max-w-[60%] text-[#808080]">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <div className="flex justify-between  gap-5 my-5 mx-0 overflow-x-scroll scrollbar-hide  ">
          {menu_list.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[150px] text-left menu-list-item"
                onClick={() =>
                  setCategroy((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
              >
                <img
                  src={item.menu_image}
                  alt=""
                  className={`w-[6.5vw] min-w-20 cursor-pointer rounded-full transition duration-200 ${
                    category === item.menu_name ? "active" : ""
                  }`}
                />
                <p className="mt-3 text-[#747474] text-[max(1.4vw,16px)]  cursor-pointer ml-3 ">
                  {item.menu_name}
                </p>
              </div>
            );
          })}
        </div>
        <hr className="my-3 h-[2px] bg-[#e2e2e2] border-none " />
      </div>
    </>
  );
};

export default ExploreMenu;
