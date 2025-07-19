import React from "react";
import assets from "../assets/assets";

const Contact = () => {
  return (
    <div className="md:px-[50px] px-[25px]">
      <div>
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <div className="flex flex-row gap-6 mt-6">
          <div className="flex-1/3 bg-[#E7F9FD] rounded-lg flex flex-col justify-end">
            <img
              src={assets.contactPerson}
              className="w-full h-auto object-cover rounded-lg"
              alt=""
            />
          </div>
          <div className="flex-2/3">
            <div className="flex flex-row gap-10">
              <div className="flex flex-col w-[40%] gap-7 items-start p-2">
                <p>Your Name</p>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-[40px] p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col w-[40%] gap-7 items-start ">
                <p>Your Email</p>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-[40px] p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <div className="flex flex-col w-[40%] gap-7 items-start">
                <p>Subject</p>
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="w-full h-[40px] p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col w-[40%] gap-7 items-start">
                <p>Your Email</p>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-[40px] p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex flex-row mt-[25px] ">
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
    </div>
  );
};

export default Contact;
