import React from "react";

const Header = () => {
  return (
    <>
      <div className="h-[35vw] my-8 m-auto bg-contain relative bg-[url(/header_img.png)] bg-no-repeat">
        <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
          <h2 className="font-light text-white text-[max(4.5vw,22px)]">
            Order your Favourite Food Here
          </h2>
          <p className="text-white text-[1vw]">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <a href="#explore-menu">
            <button className="bg-white border-none text-[#747474] font-medium py-[1vw] px-[2.5vw] rounded-[50px] hover:bg-[#fff4f2] hover:text-[#59557e]">
              View Menu
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
