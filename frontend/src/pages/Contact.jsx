import React from "react";
import assets from "../assets/assets";
import EmailBox from "../components/EmailBox";
import moreRecipes from "../assets/moreRecipes";
import RecipeCard from "../components/RecipeCard";

const Contact = () => {
  return (
    <div className="md:px-[50px] px-[25px]">
      <div>
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <div className="flex flex-row gap-6 mt-6">
          <div className="hidden flex-1/3 bg-[#E7F9FD] rounded-lg md:flex flex-col justify-end">
            <img
              src={assets.contactPerson}
              className="w-full h-auto object-cover rounded-lg"
              alt=""
            />
          </div>
          <div className="flex-2/3 max-md:px-[50px] max-sm:px-[15px] max-md:py-[30px] rounded-2xl max-md:bg-[#E7F9FD]">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex flex-col md:flex-col w-full md:w-[40%] gap-2 items-start">
                <p className="whitespace-nowrap font-semibold">Your Name</p>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-[40px] p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col md:flex-col w-full md:w-[40%] gap-2 items-start">
                <p className="whitespace-nowrap font-semibold">Your Email</p>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-[40px] p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-[25px]">
              <div className="whitespace-nowrap flex w-full flex-row md:flex-col md:w-[40%] gap-7 items-start">
                <p>Subject</p>
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="w-full h-[40px] p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="whitespace-nowrap flex w-full flex-row md:flex-col md:w-[40%] gap-7 items-start">
                <p>Your Email</p>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-[40px] p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row mt-[25px] ">
              <div className="flex flex-col w-[100%] gap-7 items-start">
                <p>Your Message</p>
                <textarea
                  placeholder="Your Message"
                  className="w-full h-[150px] p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-row mt-[25px] justify-start">
              <button className="bg-black text-white py-2 px-4 rounded">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <EmailBox />
      <div className='mt-8 mb-10'>
            <h3 className='text-2xl font-semibold text-center'>You May Like These Foods Too</h3>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>
              {moreRecipes.slice(0, 4).map((recipes, index) => (
                <RecipeCard
                        key={index}
                        image={recipes.image}
                        name={recipes.name}
                        time={recipes.time}
                        type={recipes.type}
                        bgColor="bg-[#ffffff]"
                    />
              ))}
            </div>
        </div>
    </div>
  );
};

export default Contact;
