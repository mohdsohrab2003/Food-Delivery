import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const DisplayFoodItem = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <>
      <div className="mt-8 mb-4" id="food-display">
        <h2 className="text-[max(2vw,24px)] font-semibold">
          Top Dishes Near You
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-8 gap-8 gap-x-12">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayFoodItem;
