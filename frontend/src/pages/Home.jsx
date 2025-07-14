import React from "react";
import assets from "../assets/assets";
import { TbStopwatch } from "react-icons/tb";
import { CiForkAndKnife } from "react-icons/ci";
import { FaRegPlayCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center justify-between md:mt-8 mx-auto w-full">
      {/* make only the right side rounded */}
      <div className="hidden md:block w-[50px] h-[80vh] bg-[#E7F9FD] rounded-r-2xl"></div>
      <div className="max-md:p-9 flex flex-col md:flex-row items-center justify-center w-full md:w-[80%] h-[90vh] md:h-[80vh] bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="hidden w-full md:w-[50%] h-full md:flex flex-col p-8 bg-[#E7F9FD] rounded-2xl md:rounded-l-2xl md:rounded-r-none">
          <div className="flex flex-row items-center gap-4 mb-6 mt-10">
            <img src={assets.recipes} alt="" />
            <p className="font-bold">Hot Recipes</p>
          </div>
          <h1 className="font-medium text-6xl mt-5">
            Spicy Delicious <br /> Hot Wings
          </h1>
          <p className="text-gray-600 mt-8">
            Experience the perfect blend of heat and flavor with our signature
            hot wings, crafted to satisfy your cravings.
          </p>
          <div className="flex items-center flex-row gap-[80px] mt-8 text-black">
            <div className="flex items-center flex-row gap-4 bg-[#000000]/5 px-4 py-2 rounded-3xl">
              <TbStopwatch />
              <p>30 Minutes</p>
            </div>
            <div className="flex items-center flex-row gap-4 bg-[#000000]/5 px-4 py-2 rounded-3xl">
              <CiForkAndKnife />
              <p>Chicken</p>
            </div>
          </div>
          <div className="flex items-center flex-row gap-8 mt-[120px]">
            <div className="flex items-center flex-row gap-2 ">
              <div className="flex items-center rounded-full overflow-hidden w-10 h-10">
                <img
                  src="https://randomuser.me/api/portraits/men/47.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col ml-3">
                <p className="font-bold">John Doe</p>
                <p className="text-gray-600">Food Blogger</p>
              </div>
            </div>
            <div className="flex items-center flex-row gap-2 bg-black rounded-2xl px-6 py-3">
              <p className="text-white">View Recipes</p>
              <FaRegPlayCircle className="text-white" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] h-full relative z-20 rounded-2xl md:rounded-r-2xl">
          <img
            src={assets.hero}
            className="w-full h-full object-cover rounded-2xl md:rounded-r-2xl"
            alt=""
          />
          <div className="absolute inset-0 bg-black/60 md:bg-transparent rounded-2xl md:rounded-r-2xl pointer-events-none"></div>
          <div className="absolute inset-0 flex items-center flex-col gap-[50px] justify-center text-white w-full mx-auto">
            <h1 className="font-bold text-5xl block md:hidden text-center">Spicy Delicious Hot Wings</h1>
            <p className="text-center md:hidden text-lg max-w-[80%]">Indulge in our spicy hot wings, a perfect blend of flavor and heat, crafted for wing lovers.</p>
            <div className="flex md:hidden items-center flex-row gap-2 bg-[#E7F9FD] rounded-2xl px-6 py-3">
              <p className="text-black">View Recipes</p>
              <FaRegPlayCircle className="text-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-[50px] h-[80vh] bg-[#E7F9FD] rounded-l-2xl"></div>
    </div>
  );
};

export default Home;
