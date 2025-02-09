import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totolAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);

        totolAmount += itemInfo.price * cartItem[item];
      }
    }
    console.log(totolAmount);
    return totolAmount;
  };
  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItem) {
  //     if (cartItem[item] > 0) {
  //       let itemInfo = food_list.find(
  //         (product) => product._id === Number(item)
  //       ); // Convert item to number
  //       if (itemInfo) {
  //         // Ensure itemInfo is found
  //         totalAmount += itemInfo.price * cartItem[item];
  //       }
  //     }
  //   }
  //   return totalAmount;
  // };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addCart,
    removeCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
