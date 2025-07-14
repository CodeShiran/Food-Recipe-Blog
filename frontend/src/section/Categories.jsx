import React from "react";
import categories from "../assets/categories";

const Categories = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-[25px] md:grid-cols-4 lg:grid-cols-6 justify-items-center mt-[75px]">
      {categories.map((category, index) => {
        let bgClass = "";
        if (category.name == "Breakfast") {
          bgClass = "bg-[#FCE8D5]/40";
        } else if (category.name == "Chocolate") {
          bgClass = "bg-[#FDE8E5]/40";
        } else if (category.name == "Dessert") {
          bgClass = "bg-[#F8D8E4]/40";
        } else if (category.name == "Lunch") {
          bgClass = "bg-[#E8F9FD]/40";
        } else if (category.name == "Meat") {
          bgClass = "bg-[#FCE8D5]/40";
        } else if (category.name == "Vegan") {
          bgClass = "bg-[#E8F9FD]/40";
        }
        return (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center gap-8 p-6 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-2xl ${bgClass}`}
          >
            {/* Glass effect at top */}
            <div className="absolute top-0 left-0 w-full h-16 rounded-t-2xl backdrop-blur-md bg-white/30 pointer-events-none"></div>
            <img
              src={category.image}
              className="w-[75px] h-[75px] object-cover z-10"
              alt=""
            />
            <p className="font-bold z-10">{category.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
