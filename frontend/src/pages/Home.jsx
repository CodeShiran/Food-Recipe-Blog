import React from "react";
import Hero from "../section/Hero";
import Categories from "../section/categories";
import Recipes from "../section/Recipes";
import BeChef from "../section/BeChef";
import Instagram from "../section/Instagram";
import MoreRecipes from "../section/MoreRecipes";
import Email from "../section/Email";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Recipes />
      <BeChef />
      <Instagram />
      <MoreRecipes />
      <Email />
    </div>
  );
};

export default Home;
