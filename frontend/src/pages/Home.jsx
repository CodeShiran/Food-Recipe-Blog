import React from "react";
import Hero from "../section/Hero";
import Categories from "../section/categories";
import Recipes from "../section/Recipes";
import BeChef from "../section/BeChef";



const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Recipes />
      <BeChef />
    </div>
  );
};

export default Home;
