import React, { useState } from "react";
import moreRecipes from "../assets/moreRecipes";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {

    const [search, setSearch] = useState("");

    const filteredPages = moreRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
    );

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;

  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const recipesToShow = filteredPages.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredPages.length / recipesPerPage);




  return (
    <div className="md:px-[50px] px-[25px]">
      <h1 className="text-4xl text-center mt-[50px]">Recipes</h1>
      <div className="flex flex-row items-center justify-between">
        <div>
          <select className="border border-gray-300 p-2">
            <option value="">All Categories</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <div>
          <input
            onChange={e => {setSearch(e.target.value)}}
            type="text"
            placeholder="Search Recipes..."
            className="border border-gray-300 p-2"
          />
          <button onClick={filteredPages} className="bg-black text-white p-2 hover:bg-gray-700 hover:shadow-sm">Search</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[25px] justify-items-center mt-[50px]">
        {recipesToShow.map((recipe, index) => (
          <RecipeCard
            key={index}
            image={recipe.image}
            name={recipe.name}
            time={recipe.time}
            type={recipe.type}
            bgColor="bg-[#ffffff]"
          />
        ))}
      </div>
      <div className="text-center mt-[50px]">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "font-bold" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
