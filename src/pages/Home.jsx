import React, { useState } from "react";
import Header from "../components/Header";
import ExploreMenu from "../components/ExploreMenu";
import DisplayFoodItem from "../components/DisplayFoodItem";
import AppDownload from "../components/AppDownload";

const Home = () => {
  const [category, setCategroy] = useState("All");
  return (
    <>
      <Header />
      <ExploreMenu category={category} setCategroy={setCategroy} />
      <DisplayFoodItem category={category} />
      <AppDownload />
    </>
  );
};

export default Home;
