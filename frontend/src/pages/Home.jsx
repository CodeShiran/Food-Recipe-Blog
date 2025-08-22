import React from "react";
import Hero from "../section/Hero";
import Categories from "../section/Categories";
import Recipes from "../section/Recipes";
import BeChef from "../section/BeChef";
import Instagram from "../section/Instagram";
import MoreRecipes from "../section/MoreRecipes";
import Email from "../section/Email";
import Footer from "../components/Footer";
import Chat from "../components/Chat";




const Home = () => {
  
  return (
    <div>
      <Chat />
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
