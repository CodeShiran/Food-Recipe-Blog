import React from "react";
import Hero from "../section/Hero";
import Categories from "../section/categories";
import Recipes from "../section/Recipes";
import BeChef from "../section/BeChef";
import Instagram from "../section/Instagram";



const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Recipes />
      <BeChef />
      <Instagram />
    </div>
  );
};

export default Home;
